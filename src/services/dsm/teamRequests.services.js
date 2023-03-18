const { dashboardPrisma } = require('../../prismaClient');
const { HttpError } = require('../../errors');
const prismaUtils = require('../../utils/prismaUtils');
const selectOnlyValidTeamrequestsFields = {
  select: {
    requestId: true,
    author: true,
    content: true,
    status: true,
    type: true,
    createdAt: true,
    taggedIndividuals: true,
    memberId: true,
    projectId: true
  }
};
// service to create a valid team request
const createValidTeamRequest = async (
  author, content, status, type, createdAt, taggedIndividuals, projectId, memberId
) => {
  const createdRequest = await dashboardPrisma.Request.create({
    data: {
      author,
      content,
      status,
      type,
      createdAt,
      projectId,
      memberId,
      ...(taggedIndividuals && { taggedIndividuals }),
    },
    ...selectOnlyValidTeamrequestsFields
  });
  return createdRequest;
};
// service to get all team requests
const getAllTeamRequests = async (type,
  author,
  startDate,
  endDate,
  searchKeyword,
  status,
  page,
  limit,
  projectId
) => {
  const paginationObj = prismaUtils.getPaginationObject(page, limit);
  const filterObj = prismaUtils.queryParamFilterTeamRequests(type,
    author,
    startDate,
    endDate,
    searchKeyword,
    status);
  const teamRequests = await dashboardPrisma.Request.findMany({
    where: {
      projectId: projectId,
      ...filterObj,
    },
    orderBy: {
      createdAt: 'desc',
    },
    ...(paginationObj && paginationObj),
    ...selectOnlyValidTeamrequestsFields
  }
  );
  return teamRequests;
};
// service to edit team requests
const editTeamRequest = async (
  requestId, author, content, status, type, createdAt, taggedIndividuals, memberId
) => {
  // check is request belongs to member
  const request = await dashboardPrisma.Request.findUnique({
    where: {
      requestId: requestId
    },
    select: {
      memberId: true
    }
  });

  if(!request) throw new HttpError(404, 'Team Request not found');
  if (request.memberId !== memberId) throw new HttpError(403, 'You are not authorized to edit this request');
  
  const updatedRequest = await dashboardPrisma.Request.update({
    where: {
      requestId: requestId,
    },
    data: {
      author,
      content,
      status,
      type,
      createdAt,
      ...(taggedIndividuals && { taggedIndividuals }),
    },
    ...selectOnlyValidTeamrequestsFields
  });
  if (!updatedRequest) {
    throw new HttpError(404, 'Team Request not found');
  }
  return updatedRequest;
};
// service to delete team request by team request id
const deleteTeamRequest = async (requestId, memberId) => {
  // check is request belongs to member
  const request = await dashboardPrisma.Request.findUnique({
    where: {
      requestId: requestId
    },
    select: {
      memberId: true
    }
  });

  if(!request) throw new HttpError(404, 'Team Request not found');
  if (request.memberId !== memberId) throw new HttpError(403, 'You are not authorized to delete this request');

  const deleteRequest = await dashboardPrisma.Request.delete(
    {
      where: {
        requestId: requestId
      }
    }
  );
  if (!deleteRequest) {
    throw new HttpError(404, 'Team Request not found');
  }
  return deleteRequest;
};
module.exports = { createValidTeamRequest, getAllTeamRequests, editTeamRequest, deleteTeamRequest };