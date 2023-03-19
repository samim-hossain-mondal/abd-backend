const teamInformationService = require('../services/teamInformations.service');
// controller for creating a teamInformation
const createTeamInformation = async (req, res, next) => {
  try {
    const {
      emailId,
      name ,
      bio ,
      role,
      message ,
      projectId ,
      startDate ,
      endDate } = req.body;
    const profile = await teamInformationService.createTeamInformation(emailId,
      name ,
      bio ,
      role,
      message ,
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
      emailId,
      name ,
      bio ,
      role,
      message ,
      projectId ,
      startDate ,
      endDate } = req.body;
    const {id}= req.params;
    const profile = await teamInformationService.updateTeamInformation(parseInt(id),emailId,
      name ,
      bio ,
      role,
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
    const profile = await teamInformationService.deleteTeamInformation(parseInt(id));
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
    const profiles = await teamInformationService.getTeamInformationsByProjectId(projectId);
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