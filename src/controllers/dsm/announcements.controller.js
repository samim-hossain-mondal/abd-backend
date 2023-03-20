const announcementServices = require('../../services/dsm/announcements.services');

/**
  * Controller to handle GET request for listing all announcements
  * @param {Object} req - Express request object
  * @param {Object} res - Express response object
  * @param {Function} next - Express next middleware function
*/
const listAnnouncements = async (req, res, next) => {
  try {
    const { projectId } = req.params;
    const announcements = await announcementServices.getAnnouncements(parseInt(projectId));
    res.status(200).json(announcements);
  }
  catch (er) {
    next(er);
  }
};

/** 
  * Controller to handle GET request for getting an announcement by id
  * @param {Object} req - Express request object
  * @param {Object} res - Express response object
  * @param {Function} next - Express next middleware function
*/
const detailAnnouncement = async (req, res, next) => {
  try {
    const { projectId, id: announcementId } = req.params;
    const resultAnnouncement = await announcementServices.getAnnouncementByID(
      announcementId,
      parseInt(projectId)
    );
    res.status(200).json(resultAnnouncement);
  }
  catch (er) {
    next(er);
  }
};

/** 
  * Controller to handle POST request for creating an announcement
  * @param {Object} req - Express request object
  * @param {Object} res - Express response object
  * @param {Function} next - Express next middleware function
*/
const createAnnouncement = async (req, res, next) => {
  try {
    // author ID is set as random(between 1 to 1000) for now
    // const author = req.user.id;
    const author = req.user.name || 'ANON';
    const { memberId } = req.user;
    const { projectId } = req.params;
    const { content } = req.body;
    const resultAnnouncement = await announcementServices.createAnnouncement(
      author, memberId, content, parseInt(projectId)
    );
    res.status(201).json(resultAnnouncement);
  }
  catch (er) {
    next(er);
  }
};

/**
  * Controller to handle PATCH request for editing an announcement
  * @param {Object} req - Express request object
  * @param {Object} res - Express response object
  * @param {Function} next - Express next middleware function
*/
const editAnnouncement = async (req, res, next) => {
  try {
    const memberId = req.user.memberId;
    const announcementId = req.params.id;
    const { projectId } = req.params;
    const content = req.body.content;
    const resultAnnouncement = await announcementServices.editAnnouncement(
      announcementId, content, parseInt(memberId), parseInt(projectId)
    );
    res.status(200).json(resultAnnouncement);
  }
  catch (er) {
    next(er);
  }
};

/** 
  * Controller to handle DELETE request for deleting an announcement
  * @param {Object} req - Express request object
  * @param {Object} res - Express response object
  * @param {Function} next - Express next middleware function
*/
const deleteAnnouncement = async (req, res, next) => {
  try {
    // TODO: check if the user is the author of the announcement
    const memberId = req.user.memberId;
    const announcementId = req.params.id;
    const { projectId } = req.params;

    await announcementServices.deleteAnnouncement(
      announcementId, parseInt(memberId), parseInt(projectId)
    );
    res.status(204).json();
  }
  catch (er) {
    next(er);
  }
};

module.exports = {
  listAnnouncements,
  detailAnnouncement,
  createAnnouncement,
  editAnnouncement,
  deleteAnnouncement
};