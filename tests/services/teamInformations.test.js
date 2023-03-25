const  {managementPrisma, dashboardPrisma}  = require('../../src/prismaClient');
const teamInformationsService = require('../../src/services/teamInformations.service');
describe('teamInformationsServices', () => {
  describe('createteamInformation', () => {
    it('should create a teamInformation when called', async () => {
      const mockTeamInformation = {    
        'memberId': 1,
        'bio': 'string',
        'projectRole': 'string',
        'projectId': 1,
        'startDate': '2021-06-16T18:05:37.000Z',
        'endDate': '2021-06-16T18:05:37.000Z',
      };
      const mockManagementDBInformation = {
        'name': 'test',
        'email':'test',
        'slackLink':'test',
      };
      const mockResult ={
        'memberId': 1,
        'bio': 'string',
        'projectRole': 'string',
        'message': 'test',
        'projectId': 1,
        'startDate': '2021-06-16T18:05:37.000Z',
        'endDate': '2021-06-16T18:05:37.000Z',
        'name': 'test',
        'emailId':'test',
      };
      jest.spyOn(dashboardPrisma.teamInformation, 'create').mockResolvedValue(mockTeamInformation);
      jest.spyOn(managementPrisma.Member, 'update').mockResolvedValue(mockManagementDBInformation);
      const teamInformation = await teamInformationsService.createTeamInformation(mockTeamInformation);
      expect(teamInformation).toEqual(mockResult);
    });
  });
  describe('getAllteamInformations', () => {
    it('should return all teamInformations when called', async () => {
      const mockTeamInformation = [{
        'memberId': 1,
        'bio':'test',
        'projectRole':'test',
        'projectId':'test',
        'startDate':'2021-01-01',
        'endDate':'2021-01-01'
      }];
      const mockManagementDBInformation =
          {
            'name': 'test',
            'email':'test',
            'slackLink':'test',
            'memberId': 1,
          };
      const mockResult = [{
        'memberId': 1,
        'bio':'test',
        'projectRole':'test',
        'message':'test',
        'projectId':'test',
        'startDate':'2021-01-01',
        'endDate':'2021-01-01',
        'name': 'test',
        'emailId':'test',
      }];
      jest.spyOn(dashboardPrisma.teamInformation, 'findMany').mockResolvedValue(mockTeamInformation);
      jest.spyOn(managementPrisma.Member, 'findUnique').mockResolvedValue(mockManagementDBInformation);
      const teamInformation = await teamInformationsService.getAllTeamInformations();
      expect(teamInformation).toEqual(mockResult);
    });
  }); 
  describe('getAllTeamInformation', () => {
    it('should return all teamInformation when called', async () => {
      const mockDashBoardDBInformation = [{
        'memberId': 1,
        'bio':'test',
        'projectRole':'test',
        'message':'test',
        'projectId':1,
        'startDate':'2021-01-01',
        'endDate':'2021-01-01'
      }];
      const mockManagementDBInformation = 
          {
            'name': 'test',
            'email':'test',
            'slackLink':'test',
            'memberId': 1,
          };
      const mockResult = [{
        'memberId': 1,
        'bio':'test',
        'projectRole':'test',
        'message':'test',
        'projectId':1,
        'startDate':'2021-01-01',
        'endDate':'2021-01-01',
        'name': 'test',
        'emailId':'test'
      }];
      jest.spyOn(dashboardPrisma.teamInformation, 'findMany').mockResolvedValue(mockDashBoardDBInformation);
      jest.spyOn(managementPrisma.Member, 'findUnique').mockResolvedValue(mockManagementDBInformation);
      const teamInformation = await teamInformationsService.getAllTeamInformations();
      expect(teamInformation).toEqual(mockResult);
    });
  });
  describe('updateTeamInformation', () => {
    it('should update a teamInformation when called', async () => {
      const mockResult = {
        'memberId': 1,
        'bio':'test',
        'projectRole':'test',
        'message':'test',
        'projectId':1,
        'startDate':'2021-01-01',
        'endDate':'2021-01-01',
        'name': 'test',
        'emailId':'test'
      };
      const mockDashBoardDBInformation = {
        'memberId': 1,
        'bio':'test',
        'projectRole':'test',
        'message':'test',
        'projectId':1,
        'startDate':'2021-01-01',
        'endDate':'2021-01-01'
      };
      const mockManagementDBInformation =        
          {
            'name': 'test',
            'email':'test',
            'slackLink':'test',
            'memberId': 1,
          }
        ;
      jest.spyOn(dashboardPrisma.teamInformation, 'update').mockResolvedValue(mockResult);
      jest.spyOn(managementPrisma.Member, 'update').mockResolvedValue(mockManagementDBInformation);
      const teamInformation = await teamInformationsService.updateTeamInformation(mockDashBoardDBInformation);
      expect(teamInformation).toEqual(mockResult);
    });
    it('should throw error when not existing id is passed', async () => {
      const id = 8;
      const deleteResult = { count: 0 };
      jest.spyOn(dashboardPrisma.teamInformation, 'update')
        .mockResolvedValue(deleteResult); 
      await expect(async () => {
        await teamInformationsService.updateTeamInformation(id);
      }).rejects.toThrow('(UPDATE) : No Record Found');
    });
  });
  describe('deleteTeamInformation', () => {
    it('should delete a teamInformation when called', async () => {
      const id = 1;
      const deleteResult = { count: 1 };
      jest.spyOn(dashboardPrisma.teamInformation, 'delete')
        .mockResolvedValue(deleteResult);
      const teamInformation = await teamInformationsService.deleteTeamInformation(id);
      expect(teamInformation).toEqual(deleteResult);
    });
    it('should throw error when not existing id is passed', async () => {
      const id = 8;
      const deleteResult = { count: 0 };
      jest.spyOn(dashboardPrisma.teamInformation, 'delete')
        .mockResolvedValue(deleteResult);
      await expect(async () => {
        await teamInformationsService.deleteTeamInformation(id);
      }).rejects.toThrow('(DELETE) : No Record Found');
    });
  });
  describe('getTeamInformationsByProjectId', () => { 
    it('should return all teamInformation when called', async () => {
      const projectId = 1;
      const mockDashBoardDBInformation = [{
        'memberId': 1,
        'bio':'test',
        'projectRole':'test',
        'projectId':1,
        'startDate':'2021-01-01',
        'endDate':'2021-01-01'
      }];
      const mockManagementDBInformation =    {
        'name': 'test',
        'email':'test',
        'slackLink':'test',
        'memberId': 1,
      };
      const mockResult = [{
        'memberId': 1,
        'bio':'test',
        'projectRole':'test',
        'projectId':1,
        'startDate':'2021-01-01',
        'endDate':'2021-01-01',
        'name': 'test',
        'emailId':'test',
        'message':'test'
      }];
      jest.spyOn(dashboardPrisma.teamInformation, 'findMany').mockResolvedValue(mockDashBoardDBInformation);
      jest.spyOn(managementPrisma.Member, 'findUnique').mockResolvedValue(mockManagementDBInformation);
      const teamInformation = await teamInformationsService.getTeamInformationsByProjectId(projectId);
      expect(teamInformation).toEqual(mockResult);
    });
  });
});
