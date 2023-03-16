const { HttpError } = require('../../errors');
const { dashboardPrisma } = require('../../prismaClient');

const selectOnlyValidAnnouncementFields = {
  select: {
    announcementId: true,
    author: true,
    content: true,
    createdAt: true,
    projectId: true
  }
};

/**
  * Service to list all the announcements
  * @returns {Object} - List of announcements
*/
const getAnnouncements = async () => {
  const announcements = await dashboardPrisma.Announcement.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    ...selectOnlyValidAnnouncementFields
  });
  return announcements;
};

/** 
  * Service to list announcement by id
  * @param {Number} announcementId - Announcement id
  * @returns {Object} - Announcement object
  * @throws {HttpError} - Throws an error if announcement not found
*/
const getAnnouncementByID = async (announcementId) => {
  const announcement = await dashboardPrisma.Announcement.findUnique({
    where: {
      announcementId
    },
    ...selectOnlyValidAnnouncementFields
  });
  if (!announcement) {
    throw new HttpError(404, 'Announcement not found');
  }
  return announcement;
};

/**
  * Service to create announcement
  * @param {String} author - user id of the author
  * @param {String} content - content of the announcement
  * @returns {Object} - Announcement object
*/
const createAnnouncement = async (author, content, projectId) => {
  const announcement = await dashboardPrisma.Announcement.create({
    data: {
      author,
      content,
      projectId
    },
    ...selectOnlyValidAnnouncementFields
  });
  return announcement;
};

/** 
  * Service to edit announcement
  * @param {Number} announcementId - Announcement id
  * @param {String} content - new content of the announcement
  * @returns {Object} - Updated announcement object
  * @throws {HttpError} - Throws an error if announcement not found
*/
const editAnnouncement = async (announcementId, content) => {
  const availableAnnouncement = await dashboardPrisma.Announcement.findUnique({
    where: {
      announcementId
    },
    ...selectOnlyValidAnnouncementFields
  });
  if (!availableAnnouncement) {
    throw new HttpError(404, 'Announcement not found');
  }
  //TODO: Can be optimised further
  const announcement = await dashboardPrisma.Announcement.update({
    where: {
      announcementId
    },
    data: {
      content
    },
    ...selectOnlyValidAnnouncementFields
  });
  return announcement;
};

/** 
  * Service to delete announcement by id
  * @param {Number} announcementId - Announcement id
  * @returns {void} - No return value
  * @throws {HttpError} - Throws an error if announcement not found
*/
const deleteAnnouncement = async (announcementId) => {
  const announcement = await dashboardPrisma.Announcement.findUnique({
    where: {
      announcementId
    },
    ...selectOnlyValidAnnouncementFields
  });
  if (!announcement) {
    throw new HttpError(404, 'Announcement not found');
  }
  // TODO: Can be optimised further
  await dashboardPrisma.Announcement.delete({
    where: {
      announcementId
    },
    ...selectOnlyValidAnnouncementFields
  });
};

module.exports={
  getAnnouncements,
  getAnnouncementByID,
  createAnnouncement,
  editAnnouncement,
  deleteAnnouncement
};