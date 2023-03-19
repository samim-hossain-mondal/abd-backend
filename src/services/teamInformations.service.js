const { HttpError } = require('../errors');
const prisma = require('../prismaClient');
// service to create a new teamInformation
const createTeamInformation = async (emailId,
  name ,
  bio ,
  role,
  message ,
  projectId ,
  startDate ,
  endDate) => {
  const profileDetails={
    emailId,
    name ,
    bio ,
    role,
    message ,
    projectId ,
    startDate ,
    endDate
  };
  const profile = await prisma.teamInformation.create({
    data:profileDetails
  });
  return profile;
};
// service to get all teamInformations
const getAllTeamInformations = async () => {
  const profiles = await prisma.teamInformation.findMany();
  return profiles;
};
// service to update a teamInformation
const updateTeamInformation = async (id,emailId,
  name ,
  bio ,
  role,
  message ,
  projectId ,
  startDate ,
  endDate) => {
  const profileDetails={
    emailId,
    name ,
    bio ,
    role,
    message ,
    projectId ,
    startDate ,
    endDate
  };
  const profile = await prisma.teamInformation.update({
    where:{
      id:id
    },
    data:profileDetails
  });
  if(profile.count === 0)
  {
    throw new HttpError(404, '(UPDATE) : No Record Found');
  }
  return profile;
};
// service to delete a teamInformation
const deleteTeamInformation = async (id) => {
  const profile = await prisma.teamInformation.delete({
    where:{
      id:id
    }
  });
  if(profile.count === 0)
  {
    throw new HttpError(404, '(DELETE) : No Record Found');
  }
  return profile;
};
// service to get teamInformations by projectId
const getTeamInformationsByProjectId = async (projectId) => {
  const profiles = await prisma.teamInformation.findMany({
    where:{
      projectId:projectId
    }
  });
  return profiles;
};
module.exports = {
  createTeamInformation,
  getAllTeamInformations,
  updateTeamInformation,
  deleteTeamInformation,
  getTeamInformationsByProjectId
};