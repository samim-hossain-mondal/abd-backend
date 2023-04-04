const notificationsServices = require('../services/notifications.services');
const getNotifications = async (req, res, next) => {
  try {
    const {memberId,projectId}= req.params;
    const {page,limit,readStatus,targetType}= req.query;
    const notifications = await notificationsServices.getAllNotifications(parseInt(memberId),parseInt(projectId),parseInt(page),parseInt(limit),readStatus,targetType);
    res.status(200).json(notifications);
  }
  catch (er) {
    next(er);
  }
};
const updateNotification = async (req, res, next) => {
  try {
    const id = req.params.userNotificationId;
    const {readStatus,memberId,notificationId}= req.body;
    const notification = await notificationsServices.updateNotification(parseInt(id),readStatus,memberId,notificationId);
    res.status(200).json(notification);
  }
  catch (er) {
    next(er);
  }
};
module.exports = {
  getNotifications,
  updateNotification
};