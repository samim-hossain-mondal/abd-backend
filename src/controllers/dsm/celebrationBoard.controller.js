const celebrationBoardServices = require('../../services/dsm/celebrationBoard.services');

// controller to handle GET request for listing all celebrations
const listCelebrations = async (req, res, next) => {
  try {
    const memberId = parseInt(req.user.memberId);
    const projectId = parseInt(req.params.projectId);
    const { page, limit } = req.query;
    const celebrations =
      await celebrationBoardServices.listCelebrations(projectId, memberId, page ?? 1, limit ?? 10);
    res.status(200).json(celebrations);
  }
  catch (er) {
    next(er);
  }
};

// controller to handle GET request for getting a celebration by id
const detailCelebration = async (req, res, next) => {
  try {
    const memberId = parseInt(req.user.memberId);
    const celebrationId = parseInt(req.params.id);
    const projectId = parseInt(req.params.projectId);
    const celebration =
      await celebrationBoardServices.getCelebrationById(
        celebrationId,
        projectId,
        memberId
      );
    res.status(200).json(celebration);
  }
  catch (er) {
    next(er);
  }
};

// controller to handle POST request for creating a celebration
const createCelebration = async (req, res, next) => {
  try {
    const { content, type, isAnonymous } = req.body;
    const projectId = parseInt(req.params.projectId);
    const memberId = parseInt(req.user.memberId);
    const author = req.user.name || 'ANON';
    const newCelebration =
      await celebrationBoardServices.createCelebration(author, memberId, content, type, isAnonymous, projectId);
    res.status(201).json({ message: 'Celebration created successfully', newCelebration });
  }
  catch (er) {
    next(er);
  }
};

// controller to handle PATCH request for updating a celebration
const updateCelebration = async (req, res, next) => {
  try {
    const celebrationId = parseInt(req.params.id);
    const projectId = parseInt(req.params.projectId);
    const memberId = parseInt(req.user.memberId);
    const { content, type, isAnonymous, isAbuse } = req.body;
    const updatedCelebration =
      await celebrationBoardServices.updateCelebrationById(
        celebrationId, content, type, isAnonymous, memberId, projectId, isAbuse
      );
    res.status(200).json({ message: 'Celebration updated successfully', updatedCelebration });
  }
  catch (er) {
    next(er);
  }
};

// controller to handle DELETE request for deleting a celebration
const deleteCelebration = async (req, res, next) => {
  try {
    const memberId = parseInt(req.user.memberId);
    const projectId = parseInt(req.params.projectId);
    const celebrationId = parseInt(req.params.id);
    await celebrationBoardServices.deleteCelebrationById(celebrationId, memberId, projectId);
    res.status(204).end();
  }
  catch (er) {
    next(er);
  }
};

// controller to handle PATCH request for updating a reactions
const updateReaction = async (req, res, next) => {
  try {
    const celebrationId = parseInt(req.params.id);
    const memberId = parseInt(req.user.memberId);
    const projectId = parseInt(req.params.projectId);
    const { isReacted } = req.body;
    const updatedReaction =
      await celebrationBoardServices.updateReaction(celebrationId, memberId, isReacted, projectId);
    res.status(200).json({ message: 'Reaction updated successfully', updatedReaction });
  }
  catch (er) {
    next(er);
  }
};

const getReaction = async (req, res, next) => {
  try {
    const celebrationId = parseInt(req.params.id);
    const memberId = parseInt(req.user.memberId);
    const projectId = parseInt(req.params.projectId);
    const reaction =
      await celebrationBoardServices.getReaction(celebrationId, memberId, projectId);
    res.status(200).json(reaction);
  }
  catch (er) {
    next(er);
  }
};

const getCelebrationsByDate = async (req, res, next) => {
  try {
    const memberId = parseInt(req.user.memberId);
    const { date, projectId } = req.params;
    const celebrations =
      await celebrationBoardServices.getCelebrationsByDate(parseInt(projectId), memberId, date);
    res.status(200).json(celebrations);
  }
  catch (er) {
    next(er);
  }
};


module.exports = {
  listCelebrations,
  detailCelebration,
  createCelebration,
  updateCelebration,
  deleteCelebration,
  updateReaction,
  getReaction,
  getCelebrationsByDate
};