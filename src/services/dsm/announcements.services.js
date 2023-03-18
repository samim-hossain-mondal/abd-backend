const { HttpError } = require('../../errors');
const { dashboardPrisma } = require('../../prismaClient');

const selectOnlyValidAnnouncementFields = {
  select: {
    announcementId: true,
    author: true,
    content: true,
    createdAt: true,
    projectId: true,
    memberId: true,
  }
};

/**
  * Service to list all the announcements
  * @returns {Object} - List of announcements
*/
const getAnnouncements = async (projectId) => {
  const announcements = await dashboardPrisma.Announcement.findMany({
    where : {
      projectId
    },
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
      announcementId,
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
const createAnnouncement = async (author, memberId, content, projectId) => {
  const announcement = await dashboardPrisma.Announcement.create({
    data: {
      content,
      projectId,
      memberId,
      author
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
const editAnnouncement = async (announcementId, content, memberId) => {
  const availableAnnouncement = await dashboardPrisma.Announcement.findUnique({
    where: {
      announcementId
    },
    ...selectOnlyValidAnnouncementFields
  });

  if (!availableAnnouncement) {
    throw new HttpError(404, 'Announcement not found');
  }

  // check if the user is the author of the announcement
  if (availableAnnouncement.memberId !== memberId) {
    throw new HttpError(403, 'You are not authorised to edit this announcement');
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
const deleteAnnouncement = async (announcementId, memberId) => {
  const announcement = await dashboardPrisma.Announcement.findUnique({
    where: {
      announcementId
    },
    ...selectOnlyValidAnnouncementFields
  });

  if (!announcement) {
    throw new HttpError(404, 'Announcement not found');
  }

  if (announcement.memberId !== memberId) {
    throw new HttpError(403, 'You are not authorised to delete this announcement');
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