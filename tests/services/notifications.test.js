const  { managementPrisma, dashboardPrisma }  = require('../../src/prismaClient');
const notificationsServices = require('../../src/services/notifications.services');
const prismaUtils = require('../../src/utils/prismaUtils');
describe('getAllNotificationsServices', () => {
  it('should return all teamInformations when called', async () => {
    const mockUserNotification = [
      { notifications:{
        'id': 1,
        'memberId': 1,
        'readStatus': false,
        'notificationId': 1,
      },
      id: 1,
      content: 'test',
      title: 'test',
      projectId: 1,
      readStatus: false,
      }];
    const mockPaginationResult = {
      page: 1,
      limit: 10
    };
    const mockResult = [{
      'id': 1,
      'title':'test',
      'content':'test',
      'projectId':1,
      'readStatus': false,
      notifications:{
        'id': 1,
        'memberId': 1,
        'readStatus': false,
        'notificationId': 1
      }
    }];
    jest.spyOn(prismaUtils, 'getPaginationObject').mockReturnValue(mockPaginationResult);
    jest.spyOn(dashboardPrisma.userNotification, 'findMany').mockResolvedValue(mockUserNotification);
    jest.spyOn(managementPrisma.Member, 'findFirst').mockResolvedValue({name:'test',email:'test'});
    const notifications = await notificationsServices.getAllNotifications(1,1,1,1);
    expect(notifications).toEqual(mockResult);
  }
  );
});
describe('updateNotification', () => {
  it('should return all teamInformation when called', async () => {
    const mockResult = {
      'id': 1,
      'memberId': 1,
      'readStatus': true,
      'notificationId': 1,
    };
    jest.spyOn(dashboardPrisma.userNotification, 'update').mockResolvedValue(mockResult);
    const notification = await notificationsServices.updateNotification(1, true, 1, 1);
    expect(notification).toEqual(mockResult);
  });
  it('should throw error when notification with given id is not present', async () => {
    jest.spyOn(dashboardPrisma.userNotification, 'update').mockResolvedValue({count:0});
    await expect(notificationsServices.updateNotification(1, true, 1, 1)).rejects.toThrow();
  }
  );
}
);