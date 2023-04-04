const teamRequestsServices = require('../../services/dsm/teamRequests.services');
// controller for creating team request
const createTeamRequest = async (req, res, next) => {
  try {
    const { name: author } = req.user;
    const { content, status, type, createdAt, taggedIndividuals } = req.body;
    const projectId = parseInt(req.params.projectId);
    const memberId = parseInt(req.user.memberId);
    const createdRequest = await teamRequestsServices.createValidTeamRequest(
      author, content, status, type, createdAt, taggedIndividuals, projectId, memberId
    );
    res.status(201).json(createdRequest);
  }
  catch (error) {
    next(error);
  }
};
// controller for listing all team requests
const listTeamRequests = async (req, res, next) => {
  // query params for filetring on startDate, endDate, search keyword, status, page , limit and author
  const { name: author } = req.user;
  const {
    type,
    startDate,
    endDate,
    search,
    status,
    page,
    limit
  } = req.query;
  const projectId = parseInt(req.params.projectId);
  try {
    const teamRequests = await teamRequestsServices.getAllTeamRequests(
      type,
      author,
      startDate,
      endDate,
      search,
      status,
      page,
      limit,
      projectId
    );
    res.status(200).json(teamRequests);
  }
  catch (error) {
    next(error);
  }
};
// controller for editing team request
const editTeamRequest = async (req, res, next) => {
  try {
    const { name: author } = req.user;
    const projectId = parseInt(req.params.projectId);
    const { requestId } = req.params;
    const memberId = parseInt(req.user.memberId);
    const { content, status, type, createdAt, taggedIndividuals, isFlagged } = req.body;
    const updatedRequest = await teamRequestsServices.editTeamRequest(
      requestId, author, content, status, type, createdAt, taggedIndividuals, isFlagged, memberId, projectId, req.user.role
    );
    res.status(200).json(updatedRequest);
  }
  catch (error) {
    next(error);
  }
};
// controller for deleting team request
const deleteTeamRequest = async (req, res, next) => {
  try {
    const projectId = parseInt(req.params.projectId);
    const requestId = parseInt(req.params.requestId);
    const memberId = parseInt(req.user.memberId);
    const deletedRequest = await teamRequestsServices.deleteTeamRequest(
      requestId, memberId, projectId, req.user.role
    );
    res.status(204).json(deletedRequest);
  }
  catch (error) {
    next(error);
  }
};

const getTeamRequestsByDate = async (req, res, next) => {
  try {
    const { date, projectId } = req.params;
    const teamRequests = await teamRequestsServices.getTeamRequestsByDate(
      date, parseInt(projectId)
    );
    res.status(200).json(teamRequests);
  }
  catch (error) {
    next(error);
  }
};
const getTeamRequestById = async (req, res, next) => {
  try {
    const { requestId, projectId } = req.params;
    const teamRequest = await teamRequestsServices.getTeamRequestById(
      parseInt(requestId),
      parseInt(projectId)
    );
    res.status(200).json(teamRequest);
  }
  catch (error) {
    next(error);
  }
};
module.exports = { createTeamRequest, listTeamRequests, editTeamRequest, deleteTeamRequest, getTeamRequestsByDate, getTeamRequestById };