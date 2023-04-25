const teamInformationService = require('../services/teamInformations.service');
// controller for creating a teamInformation
const createTeamInformation = async (req, res, next) => {
  try {
    const {
      name,
      message,
      memberId,
      bio ,
      projectRole,
      projectId ,
      startDate ,
      endDate } = req.body;
    const profile = await teamInformationService.createTeamInformation(
      name,
      message,
      memberId,
      bio ,
      projectRole,
      projectId ,
      new Date(startDate) ,
      new Date(endDate));
    res.status(201).json(profile);
  }
  catch (er) {
    next(er);
  }
};
// controller for getting all teamInformations
const getAllTeamInformations = async (req, res, next) => {
  try {
    const profiles = await teamInformationService.getAllTeamInformations();
    res.status(200).json(profiles);
  }
  catch (er) {
    next(er);
  }
};
// controller for updating a teamInformation
const updateTeamInformation = async (req, res, next) => {
  try {
    const {
      name,
      bio ,
      projectRole,
      message ,
      projectId ,
      startDate ,
      endDate } = req.body;
    const {memberId}= req.user;
    const {id}= req.params;
    const profile = await teamInformationService.updateTeamInformation(
      parseInt(id),
      name,
      memberId,
      bio ,
      projectRole,
      message ,
      projectId ,
      new Date(startDate) ,
      new Date(endDate));
    res.status(200).json(profile);
  }
  catch (er) {
    next(er);
  }
};
// controller for deleting a teamInformation
const deleteTeamInformation = async (req, res, next) => {
  try {
    const {id}= req.params;
    const {memberId}= req.user;
    const profile = await teamInformationService.deleteTeamInformation(parseInt(id),memberId);
    res.status(200).json(profile);
  }
  catch (er) {
    next(er);
  }
};
// controller for getting all teamInformations by projectId
const getTeamInformationsByProjectId = async (req, res, next) => {
  try {
    const {projectId}= req.params;
    const { memberId } = req.user;
    const profiles = await teamInformationService.getTeamInformationsByProjectId(projectId,memberId);
    res.status(200).json(profiles);
  }
  catch (er) {
    next(er);
  }
};
module.exports = {
  createTeamInformation,
  getAllTeamInformations,
  updateTeamInformation,
  deleteTeamInformation,
  getTeamInformationsByProjectId
};