const prisma = require('../../src/prismaClient');
const { HttpError } = require('../../src/errors');
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
    it('should throw error when not existing id is passed', async () => {
      const id = 8;
  
      const deleteResult = { count: 0 };
      const spiedEdit = jest.spyOn(prisma.teamInformation, 'update')
        .mockResolvedValue(deleteResult);
  
      await expect(async () => {
        await teamInformationsService.updateTeamInformation(id);
      }).rejects.toThrowError(new HttpError(404, '(DELETE) : No Record Found'));
      expect(spiedEdit).toBeCalled();
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
    it('should throw error when not existing id is passed', async () => {
      const id = 8;
  
      const deleteResult = { count: 0 };
      const spiedDelete = jest.spyOn(prisma.teamInformation, 'delete')
        .mockResolvedValue(deleteResult);
  
      await expect(async () => {
        await teamInformationsService.deleteTeamInformation(id);
      }).rejects.toThrowError(new HttpError(404, '(DELETE) : No Record Found'));
      expect(spiedDelete).toBeCalled();
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