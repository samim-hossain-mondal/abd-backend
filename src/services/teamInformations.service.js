const { HttpError } = require('../errors');
const { dashboardPrisma } = require('../prismaClient');
const { managementPrisma } = require('../prismaClient');
// service to create a new teamInformation
const createTeamInformation = async (
  name,
  message,
  memberId,
  bio ,
  projectRole,
  projectId ,
  startDate ,
  endDate) => {
  const profileDetails={
    memberId,
    bio ,
    projectRole,
    projectId ,
    startDate ,
    endDate
  };
  const profile = await dashboardPrisma.teamInformation.create({
    data:profileDetails
  });
  const memberDetails = await managementPrisma.Member.update({
    where:{
      memberId
    },
    data:{
      slackLink:message,
      name  
    }
  });
  profile.name = memberDetails.name;
  profile.emailId = memberDetails.email;
  profile.message= memberDetails.slackLink;
  return profile;
};
// service to get all teamInformations
const getAllTeamInformations = async () => {
  const profiles = await dashboardPrisma.teamInformation.findMany();
  const memberDetailsList= await Promise.all(profiles.map(async (profile) => {
    const memberId = profile.memberId;
    const memberDetails = await managementPrisma.Member.findUnique({
      where:{
        memberId
      }
    });
    return memberDetails;
  }));
  for (let i = 0; i < profiles.length; i++) {
    const profile = profiles[i];
    const memberDetails = memberDetailsList[i];
    profile.name = memberDetails.name;
    profile.emailId = memberDetails.email;
    profile.message= memberDetails.slackLink; 
  }
  return profiles;
};
// service to update a teamInformation
const updateTeamInformation = async (
  id,
  name,
  memberId,
  bio ,
  projectRole,
  message ,
  projectId ,
  startDate ,
  endDate) => {
  const profileDetails={
    memberId,
    bio ,
    projectRole,
    projectId ,
    startDate ,
    endDate
  };
  const managementProfileDetails={
    name,
    slackLink: message
  };
  const managementProfile = await managementPrisma.Member.update({
    where:{
      memberId
    },
    data:managementProfileDetails
  }
  );
  const profile = await dashboardPrisma.teamInformation.update({
    where:{
      id:id
    },
    data:profileDetails
  });
  if(profile.count === 0)
  {
    throw new HttpError(404, '(UPDATE) : No Record Found');
  }
  profile.name = managementProfile.name;
  profile.message = managementProfile.message;
  return profile;
};
// service to delete a teamInformation
const deleteTeamInformation = async (id) => {
  const profile = await dashboardPrisma.teamInformation.delete({
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
  const profiles = await dashboardPrisma.teamInformation.findMany({
    where:{
      projectId:parseInt(projectId)
    }
  });
  const memberDetailsList= await Promise.all(profiles.map(async (profile) => {
    const memberId = profile.memberId;
    const memberDetails = await managementPrisma.Member.findUnique({
      where:{
        memberId
      }
    });
    return memberDetails;
  }));
  for (let i = 0; i < profiles.length; i++) {
    const profile = profiles[i];
    const memberDetails = memberDetailsList[i];
    profile.name = memberDetails.name;
    profile.emailId = memberDetails.email;
    profile.message= memberDetails.slackLink; 
  }
  return profiles;
};
module.exports = {
  createTeamInformation,
  getAllTeamInformations,
  updateTeamInformation,
  deleteTeamInformation,
  getTeamInformationsByProjectId
};