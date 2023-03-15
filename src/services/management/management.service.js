const { managementPrisma } = require('../../prismaClient');
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

module.exports = {
  createNewAgileDashboardInDb,
  allProjectsByEmailInDb
};