const { managementPrisma, dashboardPrisma } = require('../../prismaClient');
const { HttpError } = require('../../errors');

const createNewAgileDashboardInDb = async (projectId, projectName, projectDescription = null, email) => {
  const isProjectNew = await managementPrisma.project.findUnique({
    where: {
      projectId
    }
  });

  if(isProjectNew) {
    throw new HttpError(400, 'Project by this projectId already exists.');
  }

  const newProjectLookup = await managementPrisma.project.create({
    data: {
      projectId,
      projectName,
      projectDescription
    }
  });

  const newMemberLookup = await managementPrisma.member.create({
    data: {
      projectId,
      email
    }
  });

  if(!newProjectLookup || !newMemberLookup) {
    throw new HttpError(500, 'Error registering new project in management database.');
  }

  const isNewMember = await dashboardPrisma.member.findUnique({
    where: {
      email
    }
  });

  if(!isNewMember) {
    const newMember = await dashboardPrisma.member.create({
      data: {
        email,
        projectId: {
          set: projectId
        },
        role: 'ADMIN'
      }
    });

    if(!newMember) {
      throw new HttpError(500, 'Error registering new member in dashboard database.');
    }

    return newProjectLookup;
  }


  const addProjectIdToMember = await dashboardPrisma.member.update({
    where: {
      email
    },
    data: {
      projectId: {
        push: projectId
      }
    }
  });

  if(!addProjectIdToMember) {
    throw new HttpError(500, 'Error registering project to member in dashboard database.');
  }

  return newProjectLookup;
};






const allProjectsByEmailInDb = async (email) => {
  const projects = await managementPrisma.project.findMany({
    where: {
      members: {
        some: {
          email
        }
      }
    }
  });

  if(!projects) {
    throw new HttpError(500, 'Error fetching projects from management database.');
  }

  return projects;
};






const allMembersByProjectIdInDb = async (projectId) => {
  const members = await dashboardPrisma.member.findMany({
    where: {
      projectId: {
        has: projectId
      }
    }
  });

  if(!members) {
    throw new HttpError(500, 'Error fetching members from dashboard database.');
  }

  return members;
};







const addProjectMemberInDb = async (projectId, email, role) => {
  const existingMember = await managementPrisma.member.findUnique({
    where: {
      projectId_email: {
        email,
        projectId
      }
    }
  });
  
  if(existingMember) {
    throw new HttpError(400, 'Member already exists in this project.');
  }

  const newMemberLookup = await managementPrisma.member.create({
    data: {
      projectId,
      email
    }
  });

  if(!newMemberLookup) {
    throw new HttpError(500, 'Error adding new member to project.');
  }

  const isNewMember = await dashboardPrisma.member.findUnique({
    where: {
      email
    }
  });

  if(isNewMember) {
    const addProjectIdToMember = await dashboardPrisma.member.update({
      where: {
        email
      },
      data: {
        projectId: {
          push: projectId
        }
      }
    });

    if(!addProjectIdToMember) {
      throw new HttpError(500, 'Error adding project id to member in dashboard database.');
    }

    return addProjectIdToMember;
  }

  const newMember = await dashboardPrisma.member.create({
    data: {
      projectId: {
        set: projectId
      },
      email,
      role
    }
  });

  if(!newMember) {
    throw new HttpError(500, 'Error adding new member to project.');
  }

  return newMember;
};


const removeProjectMemberInDb = async (projectId, email) => {
  const existingMember = await managementPrisma.member.findUnique({
    where: {
      projectId_email: {
        projectId,
        email
      }
    }
  });

  if(!existingMember) {
    throw new HttpError(400, 'Member does not exist in this project.');
  }

  const removedMemberLookup = await managementPrisma.member.delete({
    where: {
      projectId_email: {
        projectId,
        email
      }
    }
  });

  if(!removedMemberLookup) {
    throw new HttpError(500, 'Error removing member from project.');
  }

  const targetMember = await dashboardPrisma.member.findUnique({
    where: {
      email
    }
  });

  const filterOutProjectId = targetMember.projectId.filter(id => id !== projectId);

  const removeProjectIdFromMember = await dashboardPrisma.member.update({
    where: {
      email
    },
    data: {
      projectId: {
        set: filterOutProjectId
      }
    }
  });

  if(!removeProjectIdFromMember) {
    throw new HttpError(500, 'Error removing project from member in dashboard database.');
  }
  
  return removedMemberLookup;
};


const updateMemberRoleInDb = async (projectId, email, role) => {
  const existingMember = await managementPrisma.member.findUnique({
    where: {
      projectId_email: {
        projectId,
        email
      }
    }
  });

  if(!existingMember) {
    throw new HttpError(400, 'Member does not exist in this project.');
  }

  const updatedMember = await dashboardPrisma.member.update({
    where: {
      email
    },
    data: {
      role
    }
  });

  if(!updatedMember) {
    throw new HttpError(500, 'Error updating member role in project.');
  }

  return updatedMember;
};



module.exports = {
  createNewAgileDashboardInDb,
  allProjectsByEmailInDb,
  allMembersByProjectIdInDb,
  addProjectMemberInDb,
  removeProjectMemberInDb,
  updateMemberRoleInDb
};