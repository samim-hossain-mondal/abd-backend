const notificationsServices = require('../../src/services/notifications.services');
const notificationsController = require('../../src/controllers/notifications.controllers');
describe('notifications controller', () => {
  describe('get all notifications', () => {
    it('should return all notifications when called', async () => {
      const mockReq = {
        params: {
          memberId: 1,
          projectId: 1
        },
        query :{
          page:1,
          limit:10
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const next = () => { };
      const mockNotifications = [
        {
          'id': 1,
          'readStatus': true,
          'memberId': 1,
          'notificationId': 1,
          'createdAt': '2021-06-16T18:05:37.000Z',
          'updatedAt': '2021-06-16T18:05:37.000Z'
        }
      ];
      jest.spyOn(notificationsServices, 'getAllNotifications').mockResolvedValue(mockNotifications);
      await notificationsController.getNotifications(mockReq, mockRes, next);
      expect(mockRes.status).toBeCalledWith(200);
      expect(mockRes.json).toBeCalledWith(mockNotifications);
    }
    );
    it('should return error when service throws error', async () => {
      const mockReq = {
        params: {
          memberId: 1,
          projectId: 1
        },
        query :{
          page:1,
          limit:10
        }
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const next = jest.fn();
      jest.spyOn(notificationsServices, 'getAllNotifications').mockRejectedValue(new Error('Bad Request'));
      await notificationsController.getNotifications(mockReq, mockRes, next);
      expect(next).toBeCalledWith(new Error('Bad Request'));
    }
    );
  });
  describe('update notification', () => {
    it('should return updated notification when called', async () => {
      const mockReq = {
        params: {
          userNotificationId: 1
        },
        body: {
          'readStatus': true,
          'memberId': 1,
          'notificationId': 1
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const next = () => { };
      const mockNotification = {
        'id': 1,
        'readStatus': true,
        'memberId': 1,
        'notificationId': 1,
        'createdAt': '2021-06-16T18:05:37.000Z',
        'updatedAt': '2021-06-16T18:05:37.000Z'
      };
      jest.spyOn(notificationsServices, 'updateNotification').mockResolvedValue(mockNotification);
      await notificationsController.updateNotification(mockReq, mockRes, next);
      expect(mockRes.status).toBeCalledWith(200);
      expect(mockRes.json).toBeCalledWith(mockNotification);
    }
    );
    it('should return error when service throws error', async () => {
      const mockReq = {
        params: {
          userNotificationId: 1
        },
        body: {
          'readStatus': true,
          'memberId': 1,
          'notificationId': 1
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const next = jest.fn();
      jest.spyOn(notificationsServices, 'updateNotification').mockRejectedValue(new Error('Bad Request'));
      await notificationsController.updateNotification(mockReq, mockRes, next);
      expect(next).toBeCalledWith(new Error('Bad Request'));
    }
    );
  });
});