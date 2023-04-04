const { dashboardPrisma } = require('../../prismaClient');
const { HttpError } = require('../../errors');
const prismaUtils = require('../../utils/prismaUtils');
const createNotification = require('../../utils/createNotification');
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
    projectId: true,
    isFlagged: true,
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
  createNotification.createNotification(content,projectId,createdRequest.requestId,'TEAM_REQUEST');
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
  const filterObj = prismaUtils.queryParamFilterTeamRequests(
    type,
    startDate,
    endDate,
    searchKeyword,
    status
  );
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
  requestId, author, content, status, type, createdAt, taggedIndividuals, isFlagged, memberId, projectId, userRole
) => {
  // check is request belongs to member
  const request = await dashboardPrisma.Request.findFirst({
    where: {
      requestId: requestId,
      projectId
    },
    select: {
      memberId: true,
      status: true
    }
  });

  if (!request) throw new HttpError(404, 'Team Request not found');
  if (request.memberId !== memberId && userRole !== 'ADMIN') throw new HttpError(403, 'You are not authorized to edit this request');


  if (status && request.status !== status) {
    if (userRole !== 'ADMIN') {
      throw new HttpError(403, 'You are not authorized to change status of this request');
    }
  }

  if (userRole === 'ADMIN') {
    author = request.author;
  }

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
      isFlagged,
      ...(taggedIndividuals && { taggedIndividuals }),
    },
    ...selectOnlyValidTeamrequestsFields
  });
  if (!updatedRequest) {
    throw new HttpError(404, 'Team Request not found');
  }
  createNotification.createNotification(content,projectId,updatedRequest.requestId,'TEAM_REQUEST');
  return updatedRequest;
};
// service to delete team request by team request id
const deleteTeamRequest = async (requestId, memberId, projectId, userRole) => {
  // check is request belongs to member
  const request = await dashboardPrisma.Request.findFirst({
    where: {
      requestId: requestId,
      projectId
    },
    select: {
      memberId: true
    }
  });

  if (!request) throw new HttpError(404, 'Team Request not found');
  if (request.memberId !== memberId && userRole !== 'ADMIN') throw new HttpError(403, 'You are not authorized to delete this request');

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
const getTeamRequestsByDate = async (date, projectId) => {
  const teamRequests = await dashboardPrisma.Request.findMany({
    where: {
      projectId: projectId,
      createdAt: {
        gte: new Date(date),
        lte: new Date(
          new Date(date).setDate(new Date(date).getDate() + 1)
        ),
      }
    },
    orderBy: {
      createdAt: 'desc',
    },
    ...selectOnlyValidTeamrequestsFields
  });
  return teamRequests;
};

const getTeamRequestById = async (requestId, projectId) => {
  const teamRequest = await dashboardPrisma.Request.findFirst({
    where: {
      requestId,
      projectId
    },
    ...selectOnlyValidTeamrequestsFields 
  });
  return teamRequest;
};
module.exports = { createValidTeamRequest, getAllTeamRequests, editTeamRequest, deleteTeamRequest, getTeamRequestsByDate ,getTeamRequestById};