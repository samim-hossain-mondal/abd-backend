const { managementPrisma } = require('../../prismaClient');
const { HttpError } = require('../../errors');
const { convertToRoleEnum } = require('../../utils/managementDbUtils');

const createNewAgileDashboardInDb = async (
  projectId, 
  projectName, 
  projectDescription = null, 
  email,
  name
) => {
  const isProjectNew = await managementPrisma.project.findUnique({
    where: {
      projectId
    }
  });

  if(isProjectNew) {
    throw new HttpError(400, 'Project by this projectId already exists.');
  }

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
      projectId,
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
      projectMembers: true
    }
  });  

  return newProject;
};

const allProjectsByCurrentUserInDb = async (email) => {
  const projects = await managementPrisma.project.findMany({
    where: {
      projectMembers: {
        some: {
          email
        }
      }
    },
    select: {
      projectId: true,
      projectName: true,
    }
  });

  return projects;
};

const allMembersByProjectIdInDb = async (projectId) => {

  const projectMembers = await managementPrisma.project.findUnique({
    where: {
      projectId
    },
    select: {
      projectMembers: {
        select: {
          email: true,
          role: true
        }
      }
    }
  });

  if (!projectMembers) {
    throw new HttpError(404, 'Project not found.');
  }

  return projectMembers;
};

const addProjectMemberInDb = async (projectId, email, role) => {
  role = convertToRoleEnum(role);

  const project = await managementPrisma.project.findUnique({
    where: { projectId },
    include: { projectMembers: true },
  });

  if (!project) {
    throw new HttpError(404, `Project with id ${projectId} not found`);
  }

  let member = await managementPrisma.member.findUnique({ 
    where: { 
      email 
    } 
  });

  if (!member) {
    member = await managementPrisma.member.create({ 
      data: { 
        email, 
      } 
    });
  }

  const existingProjectMember = project.projectMembers.find(
    (projectMember) => projectMember.email === email
  );

  if (existingProjectMember) {
    throw new HttpError(400, `Member with email ${email} is already part of the project`);
  }

  const newProjectMember = await managementPrisma.projectMember.create({
    data: {
      projectId,
      memberId: member.memberId,
      email,
      role,
    },
  });

  return newProjectMember;

};

const removeProjectMemberInDb = async (projectId, email) => {
  const project = await managementPrisma.project.findUnique({
    where: {
      projectId,
    },
    include: {
      projectMembers: true,
    },
  });

  if (!project) {
    throw new HttpError(404, 'Project not found');
  }

  const member = await managementPrisma.member.findUnique({
    where: {
      email,
    },
  });

  if (!member) {
    throw new HttpError(404, 'Member not found');
  }

  const projectMember = await managementPrisma.projectMember.findUnique({
    where: {
      projectId_email: {
        projectId,
        email,
      },
    },
  });

  if (!projectMember) {
    throw new HttpError(404, 'Member not found in project');
  }

  await managementPrisma.project.update({
    where: {
      projectId,
    },
    data: {
      projectMembers: {
        delete: {
          projectId_email: {
            projectId,
            email,
          },
        },
      },
    },
  });

  return projectMember;
};

const updateMemberRoleInDb = async (projectId, email, role) => {
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

  if (!project) {
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

  if (!projectMember) {
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

  if(!updatedProject) {
    throw new HttpError(500, 'Error updating project info in management database.');
  }

  return updatedProject;
};

const deleteProjectInDb = async (projectId) => {
  await managementPrisma.project.delete({
    where: {
      projectId: projectId
    }
  });
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
      projectMembers: {
        select: {
          email: true,
          role: true,
        }
      }
    },
  });

  if (!project) {
    throw new HttpError(404, 'Project not found.');
  }

  return project;
};

// REVIEW: these are not used endpoints

const createNewMemberInDb = async (email, name = null, role) => {
  // role = convertToRoleEnum(role);

  const member = await managementPrisma.member.create({
    data: {
      email,
      name,
      // role
    },
  });

  return member;
};

const getMemberDetailsByIdInDb = async (memberId) => {
  const member = await managementPrisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!member) {
    throw new HttpError(404, 'Member not found.');
  }
  
  return member;
};

const updateMemberInfoInDb = async (memberId, name, role) => {
  let updateFields = {};

  if (name) {
    updateFields.name = name;
  }

  // if (role) {
  //   updateFields.role = convertToRoleEnum(role);
  // }

  const updatedMember = await managementPrisma.member.update({
    where: {
      memberId,
    },
    data: {
      ...updateFields,
    },
  });

  return updatedMember;
};

const deleteMemberInDb = async (memberId) => {
  const member = await managementPrisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!member) {
    throw new HttpError(404, 'Member not found.');
  }

  await managementPrisma.member.delete({
    where: {
      memberId,
    },
  });

  return member;
};

module.exports = {
  createNewAgileDashboardInDb,
  allProjectsByCurrentUserInDb,
  allMembersByProjectIdInDb,
  addProjectMemberInDb,
  removeProjectMemberInDb,
  updateMemberRoleInDb,
  updateProjectInfoInDb,
  deleteProjectInDb,
  getProjectDetailsByIdInDb,
  createNewMemberInDb,
  getMemberDetailsByIdInDb,
  updateMemberInfoInDb,
  deleteMemberInDb,
};