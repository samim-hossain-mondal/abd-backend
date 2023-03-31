const  { managementPrisma, dashboardPrisma }  = require('../../src/prismaClient');
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
      const mockResult = {
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
  describe('deleteTeamInformation', () => {
    it('should delete a teamInformation when called', async () => {
      const id = 1;
      const deleteResult = { count: 1 };
      const memberId = 1;
      jest.spyOn(dashboardPrisma.teamInformation, 'delete')
        .mockResolvedValue(deleteResult); 
      jest.spyOn(dashboardPrisma.teamInformation, 'findUnique').mockResolvedValue({ memberId: 1 }); 
      const teamInformation = await teamInformationsService.deleteTeamInformation(id, memberId);
      expect(teamInformation).toEqual(deleteResult);
    } 
    );
    it('should throw an error when teamInformation is not found', async () => {
      const id = 1;
      const memberId = 1;
      jest.spyOn(dashboardPrisma.teamInformation, 'delete').mockResolvedValue({ count: 0 });
      jest.spyOn(dashboardPrisma.teamInformation, 'findUnique').mockResolvedValue({ count: 0});
      await expect(teamInformationsService.deleteTeamInformation(id, memberId)).rejects.toThrow('(DELETE) : No Record Found');
    }
    );
    it('should throw error when memberId of user and teamInformation is not same', async () => {
      const id = 1;
      const memberId = 1;
      jest.spyOn(dashboardPrisma.teamInformation, 'delete').mockResolvedValue({ count: 0 });
      jest.spyOn(dashboardPrisma.teamInformation, 'findUnique').mockResolvedValue({ memberId: 2});
      await expect(teamInformationsService.deleteTeamInformation(id, memberId)).rejects.toThrow('You are not allowed to delete this team information.');
    }
    );
  });
  describe('updateTeamInformation', () => {
    it('should update a teamInformation when called', async () => {
      const mockTeamInformation = {
        'id' : 1,
        'name'  : 'test',
        'memberId' : 1,
        'bio' : 'test',
        'projectRole' : 'test',
        'message' : 'test',
        'projectId' : 1,
        'startDate' : '2021-01-01',
        'endDate' : '2021-01-01',
      };
      const mockManagementDBInformation = {
        'name': 'test',
        'email':'test',
        'slackLink':'test',
        'memberId': 1,
      };
      const mockResult = {
        'id': 1,
        'memberId': 1,
        'bio':'test',
        'projectRole':'test',
        'message':'test',
        'projectId':1,
        'startDate':'2021-01-01',
        'endDate':'2021-01-01',
        'name': 'test',
        'emailId':'test',
      };
      jest.spyOn(dashboardPrisma.teamInformation, 'findUnique').mockResolvedValue(mockTeamInformation);
      jest.spyOn(dashboardPrisma.teamInformation, 'update')
        .mockResolvedValue(mockTeamInformation);
      jest.spyOn(managementPrisma.Member, 'findUnique').mockResolvedValue(mockManagementDBInformation);
      const teamInformation = await teamInformationsService.updateTeamInformation(...Object.values(mockTeamInformation));
      expect(teamInformation).toEqual(mockResult);
    }
    );
    it('should throw an error when teamInformation is not found', async () => {
      const mockTeamInformation = {
        'id' : 1,
        'name'  : 'test',
        'memberId' : 1,
        'bio' : 'test',
        'projectRole' : 'test',
        'message' : 'test',
        'projectId' : 1,
        'startDate' : '2021-01-01',
        'endDate' : '2021-01-01',
      };
      jest.spyOn(dashboardPrisma.teamInformation, 'findUnique').mockResolvedValue({ count: 0 });
      jest.spyOn(dashboardPrisma.teamInformation, 'update')
        .mockResolvedValue(mockTeamInformation);
      await expect(teamInformationsService.updateTeamInformation(...Object.values(mockTeamInformation))).rejects.toThrow('(UPDATE) : No Record Found');
    }
    );
    it('should throw error when memberId of user and teamInformation is not same', async () => {
      const mockTeamInformation = {
        'id' : 1,
        'name'  : 'test',
        'memberId' : 1,
        'bio' : 'test',
        'projectRole' : 'test',
        'message' : 'test',
        'projectId' : 1,
        'startDate' : '2021-01-01',
        'endDate' : '2021-01-01',
      };
      jest.spyOn(dashboardPrisma.teamInformation, 'findUnique').mockResolvedValue({ memberId: 2 });
      jest.spyOn(dashboardPrisma.teamInformation, 'update')
        .mockResolvedValue(mockTeamInformation);
      await expect(teamInformationsService.updateTeamInformation(...Object.values(mockTeamInformation))).rejects.toThrow('You are not allowed to update this team information.');
    }
    );
  });
  describe('getTeamInformationByProjectId', () => {
    it('should return teamInformation when called', async () => {
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
        'emailId':'test',
        'role':'MEMBER'
      }];
      jest.spyOn(dashboardPrisma.teamInformation, 'findMany').mockResolvedValue(mockDashBoardDBInformation);
      jest.spyOn(managementPrisma.Member, 'findUnique').mockResolvedValue(mockManagementDBInformation);
      jest.spyOn(managementPrisma.ProjectMember,'findUnique').mockResolvedValue({role:'MEMBER',projectId:1});
      const teamInformation = await teamInformationsService.getTeamInformationsByProjectId(1);
      expect(teamInformation).toEqual(mockResult);
    }
    );
  });
});