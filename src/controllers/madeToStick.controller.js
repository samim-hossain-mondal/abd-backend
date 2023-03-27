const madeToStickService = require('../services/madeToStick.services');

const getAllMadeToStick = async (req, res, next) => {
  const projectId = parseInt(req.params.projectId);
  try {
    const madeToStickItem = await madeToStickService.getAllMadeToStick(projectId);
    res.status(200).json(madeToStickItem);
  }
  catch (er) {
    next(er);
  }
};

const createMadeToStick = async (req, res, next) => {
  try {
    const projectId = parseInt(req.params.projectId);
    const memberId = parseInt(req.user.memberId);
    const { value, emailId, x, y, w, h, type, backgroundColor } = req.body;
    const madeToStickItem = await madeToStickService.createMadeToStick(
      value, emailId, x, y, w, h, type, backgroundColor, memberId, projectId
    );
    res.status(201).json(madeToStickItem);
  }
  catch (error) {
    next(error);
  }
};

const editMadeToStick = async (req, res, next) => {
  try {
    const { value, backgroundColor, x, y, w, h, type, emailId } = req.body;
    const { i } = req.params;
    const madeToStickItem = await madeToStickService.editMadeToStick(
      i, value, backgroundColor, x, y, w, h, type, emailId
    );
    res.status(200).json(madeToStickItem);
  }
  catch (er) {
    next(er);
  }
};

const deleteMadeToStick = async (req, res, next) => {
  try {
    const { i } = req.params;
    const madeToStickItem = await madeToStickService.deleteMadeToStick(i);
    res.status(200).json(madeToStickItem);
  }
  catch (er) {
    next(er);
  }
};

module.exports = {
  getAllMadeToStick,
  createMadeToStick,
  editMadeToStick,
  deleteMadeToStick
};