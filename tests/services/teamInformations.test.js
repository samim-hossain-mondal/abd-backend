const prisma = require('../../src/prismaClient');
const teamInformationsService = require('../../src/services/teamInformations.service');
describe('teamInformationsServices', () => {
  describe('createteamInformation', () => {
    it('should create a teamInformation when called', async () => {
      const mockTeamInformation = {
        'name': 'test',
        'emailId':'test',
        'bio':'test',
        'role':'test',
        'message':'test',
        'projectId':'test',
        'startDate':'2021-01-01',
        'endDate':'2021-01-01'
      };
      jest.spyOn(prisma.teamInformation, 'create').mockResolvedValue(mockTeamInformation);
      const teamInformation = await teamInformationsService.createTeamInformation(mockTeamInformation);
      expect(teamInformation).toEqual(mockTeamInformation);
    });
  });
  describe('getAllteamInformations', () => {
    it('should return all teamInformations when called', async () => {
      const mockTeamInformation = {
        'name': 'test',
        'emailId':'test',
        'bio':'test',
        'role':'test',
        'message':'test',
        'projectId':'test',
        'startDate':'2021-01-01',
        'endDate':'2021-01-01'
      };
      jest.spyOn(prisma.teamInformation, 'findMany').mockResolvedValue(mockTeamInformation);
      const teamInformation = await teamInformationsService.getAllTeamInformations();
      expect(teamInformation).toEqual(mockTeamInformation);
    });
  });
    
  describe('updateteamInformation', () => {
    it('should update a teamInformation when called', async () => {
      const mockTeamInformation = {
        'name': 'test',
        'emailId':'test',
        'bio':'test',
        'role':'test',
        'message':'test',
        'projectId':'test',
        'startDate':'2021-01-01',
        'endDate':'2021-01-01'
      };
      jest.spyOn(prisma.teamInformation, 'update').mockResolvedValue(mockTeamInformation);
      const teamInformation = await teamInformationsService.updateTeamInformation(mockTeamInformation);
      expect(teamInformation).toEqual(mockTeamInformation);
    });
  });
  describe('deleteteamInformation', () => {
    it('should delete a teamInformation when called', async () => {
      const mockTeamInformation = {
        'name': 'test',
        'emailId':'test',
        'bio':'test',
        'role':'test',
        'message':'test',
        'projectId':'test',
        'startDate':'2021-01-01',
        'endDate':'2021-01-01'
      };
      jest.spyOn(prisma.teamInformation, 'delete').mockResolvedValue(mockTeamInformation);
      const teamInformation = await teamInformationsService.deleteTeamInformation(mockTeamInformation);
      expect(teamInformation).toEqual(mockTeamInformation);
    });
  });
  describe('getteamInformationByProjectId', () => {
    it('should return teamInformations of project Id when called', async () => {
      const mockTeamInformation = {
        'id': '1',
        'name': 'test',
        'emailId':'test',
        'bio':'test',
        'role':'test',
        'message':'test',
        'projectId':'test',
        'startDate':'2021-01-01',
        'endDate':'2021-01-01'
      };
      jest.spyOn(prisma.teamInformation, 'findMany').mockResolvedValue(mockTeamInformation);
      const teamInformation = await teamInformationsService.getTeamInformationsByProjectId(mockTeamInformation.projectId);
      expect(teamInformation).toEqual(mockTeamInformation);
    });
  });
}
);