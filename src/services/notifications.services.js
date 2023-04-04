const { HttpError } = require('../errors');
const { dashboardPrisma } = require('../prismaClient');
const prismaUtils = require('../utils/prismaUtils');
// service to get all notifications
const getAllNotifications = async (memberId, projectId, page, limit, readStatus, targetType) => {
  const paginationObj = prismaUtils.getPaginationObject(page, limit);
  const filterObj = prismaUtils.queryParamNotificationFilter(readStatus );
  const notifications = await dashboardPrisma.userNotification.findMany({
    where: {
      AND: [
        { memberId ,
          ...filterObj
        },
        { notifications: { projectId,targetType } } ,
      ],
    },
    orderBy: {
      notifications:
    {
      createdAt: 'desc'
    }
    },
    select: {
      readStatus: true,
      memberId: true,
      notificationId: true,
      id: true,
      notifications: {
        select: {
          title: true,
          content: true,
          createdAt: true,
          targetType: true,
          targetId: true,
          projectId: true,
        },
      }
    },
    ...(paginationObj && paginationObj),
  });
  return notifications;
};
// service to update a notification
const updateNotification = async (
  id,
  readStatus,
  memberId,
  notificationId
) => {
  const notification = await dashboardPrisma.userNotification.update({
    where: {
      id,
    },
    data: {
      readStatus,
      memberId,
      notificationId,
    },
  });
  if(notification.count === 0)
  {
    throw new HttpError(404, 'Notification not found');
  }
  return notification;
};
module.exports = {
  getAllNotifications,
  updateNotification,
};