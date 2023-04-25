const { managementPrisma, dashboardPrisma } = require('../prismaClient');
const { HttpError } = require('../errors');
const { convertToRoleEnum } = require('../utils/managementDbUtils');
const madeToStickService = require('../services/madeToStick.services');
const madeToStickTemplate = require('../mocks/madeToStickTemplate');

const selectOnlyValidProjectMemberFields = {
  select: {
    email: true,
    role: true,
    memberId: true,
    projectId: true,
    isActive: true,
  }
};

const selectOnlyValidMemberFields = {
  select: {
    memberId: true,
    name: true,
    email: true,
    slackLink: true,
    isDeleted: true,
    projectMembers: selectOnlyValidProjectMemberFields
  }
};

const selectOnlyValidProjectFields = {
  select: {
    projectId: true,
    projectName: true,
    projectDescription: true,
    isDeleted: true,
    projectMembers: selectOnlyValidProjectMemberFields,
    _count: {
      select: {
        projectMembers: true
      }
    }
  }
};

const createNewAgileDashboardInDb = async (
  projectName,
  projectDescription = null,
  email,
  name
) => {
  let role = 'ADMIN';

  // check if member exists from before
  let member = await managementPrisma.member.findUnique({
    where: {
      email
    }
  });
  if (!member) {
    member = await managementPrisma.member.create({
      data: {
        name,
        email,
      }
    });
  }
  const newProject = await managementPrisma.project.create({
    data: {
      projectName,
      projectDescription,
      projectMembers: {
        create: {
          email,
          role: convertToRoleEnum(role),
          memberId: member.memberId
        }
      }
    },
    include: {
      projectMembers: true,
      _count: {
        select: {
          projectMembers: true
        }
      }
    }
  });
  const currentDate = new Date();
  await dashboardPrisma.teamInformation.create({
    data: {
      projectId: newProject.projectId,
      memberId: member.memberId,
      startDate:currentDate
    }
  });
  
  Promise.all(madeToStickTemplate.map(async (item) => {
    await madeToStickService.createMadeToStick(
      item.value,
      item.emailId,
      item.x,
      item.y,
      item.w,
      item.h,
      item.type,
      item.backgroundColor,
      member.memberId,
      newProject.projectId
    );
  }));

  return newProject;
};

const allProjectsByCurrentUserInDb = async (email) => {
  const projects = await managementPrisma.project.findMany({
    where: {
      isDeleted: false,
      projectMembers: {
        some: {
          email,
        },
      },
    },
    select: {
      ...(selectOnlyValidProjectFields.select),
      projectMembers: {
        where: {
          email,
        },
        select: {
          ...selectOnlyValidProjectMemberFields.select,
          projectId: false,
          member: {
            select: { name: true }
          }
        }
      },
      _count: {
        select: {
          projectMembers: true
        }
      }
    },
  });  

  if (!projects) {
    throw new HttpError(404, 'No projects found.');
  }

  return projects;
};

const allMembersByProjectIdInDb = async (projectId) => {

  const project = await managementPrisma.project.findFirst({
    where: {
      projectId,
    },
    ...selectOnlyValidProjectFields
  });

  if (!project || project.isDeleted) {
    throw new HttpError(404, 'Project does not exist.');
  }

  return project.projectMembers;
};

const addProjectMemberInDb = async (
  projectId, email, role, message, startDate, endDate
) => {
  role = convertToRoleEnum(role);

  const project = await managementPrisma.project.findUnique({
    where: { projectId },
    include: { projectMembers: true },
  });

  if (!project || project.isDeleted) {
    throw new HttpError(404, `Project with id ${projectId} not found`);
  }

  let member = await managementPrisma.member.upsert({
    where: { email },
    update: { isDeleted: false, slackLink: message },
    create: { email, slackLink: message },
  });

  const existingProjectMember = project.projectMembers.find(
    (projectMember) => projectMember.email === email
  );

  if (existingProjectMember && existingProjectMember.isActive) {
    throw new HttpError(400, `Member with email ${email} is already part of the project`);
  }

  if (existingProjectMember && !existingProjectMember.isActive) {
    const newProjectMember = await managementPrisma.projectMember.update({
      where: {
        projectId_email: {
          projectId,
          email,
        },
      },
      data: {
        isActive: true,
        role,
      },
    });

    const newTeamInformation = await dashboardPrisma.teamInformation.update({
      where: {
        memberId_projectId: {
          memberId: member.memberId,
          projectId,
        }
      },
      data: {
        isActive: true,
        startDate: new Date(),
        endDate: null
      },
    });

    return { newProjectMember, newTeamInformation };
  }

  const newProjectMember = await managementPrisma.projectMember.create({
    data: { projectId, memberId: member.memberId, email, role },
  });

  const newTeamInformation = await dashboardPrisma.teamInformation.create({
    data: {
      projectId,
      memberId: member.memberId,
      startDate: new Date(),
      endDate: endDate && new Date(endDate),
    },
  });

  return { newProjectMember, newTeamInformation };
};


const removeProjectMemberByEmailInDb = async (projectId, email) => {
  const project = await managementPrisma.project.findUnique({
    where: {
      projectId,
    },
    include: {
      projectMembers: true,
    },
  });

  if (!project || project.isDeleted) {
    throw new HttpError(404, 'Project not found');
  }

  const projectMember = await managementPrisma.projectMember.findUnique({
    where: {
      projectId_email: {
        projectId,
        email,
      },
    },
  });

  if (!projectMember || !projectMember.isActive) {
    throw new HttpError(404, 'Member not found in project');
  }

  await managementPrisma.projectMember.update({
    where: {
      projectId_email: {
        projectId,
        email,
      },
    },
    data: {
      isActive: false,
    },
  });

  await dashboardPrisma.teamInformation.update({
    where: {
      memberId_projectId: {
        memberId: projectMember.memberId,
        projectId,
      },
    },
    data: {
      endDate: new Date(),
      isActive: false,
    },
  });

  return projectMember;
};

const updateMemberRoleByEmailInDb = async (projectId, email, role) => {
  role = convertToRoleEnum(role);

  const member = await managementPrisma.member.findUnique({
    where: {
      email
    }
  });

  if (!member) {
    throw new HttpError(404, 'Member not found.');
  }

  const project = await managementPrisma.project.findUnique({
    where: {
      projectId
    }
  });

  if (!project || project.isDeleted) {
    throw new HttpError(404, 'Project not found.');
  }

  const projectMember = await managementPrisma.projectMember.findUnique({
    where: {
      projectId_email: {
        projectId,
        email
      }
    },
    include: {
      member: true
    }
  });

  if (!projectMember || !projectMember.isActive) {
    throw new HttpError(404, 'Member not found in project.');
  }

  const updatedProjectMember = await managementPrisma.projectMember.update({
    where: {
      projectId_email: {
        projectId,
        email
      }
    },
    data: {
      role
    }
  });

  return updatedProjectMember;
};

const updateProjectInfoInDb = async (projectId, projectName, projectDescription) => {

  const project = await managementPrisma.project.findUnique({
    where: {
      projectId
    }
  });

  if (!project || project.isDeleted) {
    throw new HttpError(404, 'Project not found.');
  }

  let updateFields = {};
  if (projectName) {
    updateFields.projectName = projectName;
  }
  if (projectDescription) {
    updateFields.projectDescription = projectDescription;
  }

  const updatedProject = await managementPrisma.project.update({
    where: {
      projectId
    },
    data: updateFields
  });

  return updatedProject;
};

const deleteProjectInDb = async (projectId) => {
  const project = await managementPrisma.project.findUnique({
    where: {
      projectId
    }
  });

  if (!project || project.isDeleted) {
    throw new HttpError(404, 'Project not found.');
  }

  await managementPrisma.project.update({
    where: {
      projectId
    },
    data: {
      isDeleted: true
    }
  });

  await managementPrisma.projectMember.updateMany({
    where: {
      projectId
    },
    data: {
      isActive: false
    }
  });

  await dashboardPrisma.teamInformation.updateMany({
    where: {
      projectId
    },
    data: {
      isActive: false,
      endDate: new Date()
    }
  });

  return project;
};

const getProjectDetailsByIdInDb = async (projectId) => {
  const project = await managementPrisma.project.findUnique({
    where: {
      projectId,
    },
    select: {
      projectId: true,
      projectName: true,
      projectDescription: true,
      isDeleted: true,
      projectMembers: {
        select: {
          email: true,
          role: true,
          isActive: true,
          memberId: true,
          member: {
            select: {
              name: true,
              email: true,
            }
          }
        }
      },
      _count: {
        select: {
          projectMembers: true,
        }
      }
    },
  });

  if (!project || project.isDeleted) {
    throw new HttpError(404, 'Project not found.');
  }

  return project;
};

const getProjectMemberDetailsByIdInDb = async (projectId, memberId) => {
  const projectMember = await managementPrisma.projectMember.findFirst({
    where: {
      projectId,
      memberId,
      isActive: true
    },
    select: {
      projectId: true,
      role: true,
      member: {
        select: {
          email: true,
          name: true,
          memberId: true
        }
      }
    }
  });

  if (!projectMember) {
    throw new HttpError(404, 'Member not found in project.');
  }

  return projectMember;
};

const updateMemberRoleByIdInDb = async (projectId, memberId, role) => {
  role = convertToRoleEnum(role);

  const project = await managementPrisma.project.findUnique({
    where: {
      projectId
    }
  });

  if (!project || project.isDeleted) {
    throw new HttpError(404, 'Project not found.');
  }

  const projectMember = await managementPrisma.projectMember.findUnique({
    where: {
      projectId_memberId: {
        projectId,
        memberId
      }
    }
  });

  if (!projectMember || !projectMember.isActive) {
    throw new HttpError(404, 'Member not found in project.');
  }

  const updatedProjectMember = await managementPrisma.projectMember.update({
    where: {
      projectId_memberId: {
        projectId,
        memberId
      }
    },
    data: {
      role
    }
  });

  return updatedProjectMember;
};

const removeProjectMemberByIdInDb = async (projectId, memberId) => {
  const project = await managementPrisma.project.findUnique({
    where: {
      projectId
    }
  });

  if (!project || project.isDeleted) {
    throw new HttpError(404, 'Project not found.');
  }

  const projectMember = await managementPrisma.projectMember.findUnique({
    where: {
      projectId_memberId: {
        projectId,
        memberId
      }
    }
  });

  if (!projectMember || !projectMember.isActive) {
    throw new HttpError(404, 'Member not found in project.');
  }

  await managementPrisma.projectMember.update({
    where: {
      projectId_memberId: {
        projectId,
        memberId
      }
    },
    data: {
      isActive: false
    }
  });
};

// REVIEW: these are not used endpoints

const createNewMemberInDb = async (email, name = null, slackLink = null) => {
  const member = await managementPrisma.member.findUnique({
    where: {
      email,
    },
  });

  if (member) {
    if (member.isDeleted) {
      await managementPrisma.member.update({
        where: {
          email,
        },
        data: {
          isDeleted: false,
        },
      });
    }
    else {
      throw new HttpError(409, 'Member already exists.');
    }
    return member;
  }

  const newMember = await managementPrisma.member.create({
    data: {
      email,
      name,
      slackLink,
    },
  });

  return newMember;
};

const getMemberDetailsByIdInDb = async (memberId) => {
  const member = await managementPrisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!member || member.isDeleted) {
    throw new HttpError(404, 'Member not found.');
  }

  return member;
};

const updateMemberInfoInDb = async (memberId, name, email, slackLink) => {
  const updatedMember = await managementPrisma.member.update({
    where: {
      memberId,
    },
    data: {
      ...(name && { name }),
      ...(email && { email }),
      ...(slackLink && { slackLink }),
    },
  });

  if (updatedMember.isDeleted) {
    throw new HttpError(404, 'Member not found.');
  }

  return updatedMember;
};

const deleteMemberInDb = async (memberId) => {
  const member = await managementPrisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!member || member.isDeleted) {
    throw new HttpError(404, 'Member not found.');
  }

  await managementPrisma.member.update({
    where: {
      memberId,
    },
    data: {
      isDeleted: true,
    },
  });

  // delete all project members
  await managementPrisma.projectMember.deleteMany({
    where: {
      email: member.email,
    },
  });

  return member;
};

module.exports = {
  createNewAgileDashboardInDb,
  allProjectsByCurrentUserInDb,
  allMembersByProjectIdInDb,
  addProjectMemberInDb,
  removeProjectMemberByEmailInDb,
  removeProjectMemberByIdInDb,
  updateMemberRoleByEmailInDb,
  updateMemberRoleByIdInDb,
  updateProjectInfoInDb,
  deleteProjectInDb,
  getProjectDetailsByIdInDb,
  createNewMemberInDb,
  getMemberDetailsByIdInDb,
  updateMemberInfoInDb,
  deleteMemberInDb,
  getProjectMemberDetailsByIdInDb,
};

