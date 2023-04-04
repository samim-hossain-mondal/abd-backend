
const  { managementPrisma, dashboardPrisma }  = require('../../src/prismaClient');
const createNotification = require('../../src/utils/createNotification');
describe('createNotification', () => {
  it('should create a notification when called', async () => {
    const mockNotification = {
      'title': 'test',
      'content': 'plese help @test@gmail.com',
      'projectId': 1,
      'author': 1,
      'id': 1,
    };
    const mockMember = {
      'id': 1,
      'name': 'test',
      'email': 'test'
    };
    const mockUserNotification = {
      'id': 1,
      'memberId': 1,
      'readStatus': false,
      'notificationId': 1,
      'author': 1,
    }; 
    jest.spyOn(dashboardPrisma.notification, 'create').mockResolvedValue(mockNotification);
    jest.spyOn(managementPrisma.Member, 'findFirst').mockResolvedValue(mockMember);
    jest.spyOn(dashboardPrisma.userNotification, 'create').mockResolvedValue(mockUserNotification);
    const notification = await createNotification.createNotification('plese help @test@gmail.com', 1, 1,'test');
    expect(notification).toEqual(mockNotification);
  });
});