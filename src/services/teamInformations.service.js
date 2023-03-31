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
  const targetProfile = await dashboardPrisma.teamInformation.findUnique({
    where:{
      id
    }
  });
  if(targetProfile.count === 0)
  {
    throw new HttpError(404, '(UPDATE) : No Record Found');
  }
  if (targetProfile.memberId !== memberId) {
    throw new HttpError(403, 'You are not allowed to update this team information.');
  }
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
      id
    },
    data:profileDetails
  });
  profile.name = managementProfile.name;
  profile.message = managementProfile.slackLink;
  profile.emailId = managementProfile.email;
  return profile;
};
// service to delete a teamInformation
const deleteTeamInformation = async (id,memberId) => {
  const targetProfile = await dashboardPrisma.teamInformation.findUnique({
    where:{
      id
    }
  });
  if(targetProfile.count === 0)
  {
    throw new HttpError(404, '(DELETE) : No Record Found');
  }
  if (targetProfile.memberId !== memberId) {
    throw new HttpError(403, 'You are not allowed to delete this team information.');
  }
  const profile = await dashboardPrisma.teamInformation.delete({
    where:{
      id
    }
  });
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
  const projectMemberDetailList = await Promise.all(profiles.map(async (profile) => {
    const memberId = profile.memberId;
    const projectMemberDetail = await managementPrisma.ProjectMember.findUnique({
      where:{
        projectId_memberId:
        {
          projectId:parseInt(projectId),
          memberId
        }
      }
    });
    return projectMemberDetail;
  }));
  for (let i = 0; i < profiles.length; i++) {
    const profile = profiles[i];
    const memberDetails = memberDetailsList[i];
    const projectMemberDetail = projectMemberDetailList[i];
    profile.name = memberDetails.name;
    profile.emailId = memberDetails.email;
    profile.message= memberDetails.slackLink; 
    profile.role= projectMemberDetail.role;
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