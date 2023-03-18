const leavesServices = require('../services/leaves.services');

async function getAllLeaves(req, res, next) {
  try {
    const leaves = await leavesServices.getAllLeaves();
    res.json(leaves);
  } catch (err) {
    next(err);
  }
}

async function createLeave(req, res, next) {
  try {
    const { event, startDate, endDate, isRisk } = req.body;
    const leave = await leavesServices.createLeave(
      event,
      isRisk,
      new Date(startDate),
      new Date(endDate),
      req.user
    );

    res.status(201).json(leave);
  } catch (err) {
    next(err);
  }
}

async function editLeave(req, res, next) {
  try {
    const { event, startDate, endDate, isRisk } = req.body;
    const leave = await leavesServices.editLeave(
      req.params.id,
      event,
      isRisk,
      new Date(startDate),
      new Date(endDate),
      req.user
    );

    res.json(leave);
  } catch (err) {
    next(err);
  }
}

async function deleteLeave(req, res, next) {
  try {
    await leavesServices.deleteLeave(req.params.id, req.user);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllLeaves,
  createLeave,
  editLeave,
  deleteLeave,
};
