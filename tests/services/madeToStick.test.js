const { dashboardPrisma: prisma } = require('../../src/prismaClient');
const madeToStickService = require('../../src/services/madeToStick.services');

describe('madeToStickServices', () => {
  describe('getAllMadeToStick', () => {
    it('should return all madeToStick item when called', async () => {
      const mockMadeToStick = [{
        'i': 1,
        'value': 'string',
        'x': 0,
        'y': 0,
        'w': 0,
        'h': 0,
        'type': 'string',
        'emailId': 'string',
        'backgroundColor': 'string',
      }];
      jest.spyOn(prisma.madeToStick, 'findMany').mockResolvedValue(mockMadeToStick);
      const result = await madeToStickService.getAllMadeToStick();
      expect(result).toEqual(mockMadeToStick);
    });
    it('should return error when service throws error', async () => {
      jest.spyOn(prisma.madeToStick, 'findMany').mockRejectedValue(new Error('Bad Request'));
      await expect(madeToStickService.getAllMadeToStick()).rejects.toThrowError('Bad Request');
    });
  });
  describe('createMadeToStick', () => {
    it('should return created madeToStick item when called', async () => {
      const mockMadeToStick = {
        'i': 1,
        'value': 'string',
        'x': 0,
        'y': 0,
        'w': 0,
        'h': 0,
        'type': 'string',
        'emailId': 'string',
        'backgroundColor': 'string',
      };
      jest.spyOn(prisma.madeToStick, 'create').mockResolvedValue(mockMadeToStick);
      const result = await madeToStickService.createMadeToStick(mockMadeToStick);
      expect(result).toEqual(mockMadeToStick);
    });
    it('should return error when service throws error', async () => {
      jest.spyOn(prisma.madeToStick, 'create').mockRejectedValue(new Error('Bad Request'));
      await expect(madeToStickService.createMadeToStick()).rejects.toThrowError('Bad Request');
    }
    );
  });
  describe('editMadeToStick', () => {
    const mockMadeToStick = {
      'value': 'string',
      'x': 0,
      'y': 0,
      'w': 0,
      'h': 0,
      'type': 'string',
      'emailId': 'string',
      'backgroundColor': 'string',
      memberId: 1,
      projectId: 1,
      'i': 1,
    };
    it('should return updated madeToStick item when called', async () => {
      jest.spyOn(prisma.madeToStick, 'findFirst').mockResolvedValue(mockMadeToStick);
      jest.spyOn(prisma.madeToStick, 'update').mockResolvedValue(mockMadeToStick);
      const result = await madeToStickService.editMadeToStick(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
      expect(result).toEqual(mockMadeToStick);
    });
    it('should return error when service throws error', async () => {
      jest.spyOn(prisma.madeToStick, 'findFirst').mockResolvedValue(mockMadeToStick);
      jest.spyOn(prisma.madeToStick, 'update').mockRejectedValue(new Error('Bad Request'));
      await expect(madeToStickService.editMadeToStick({ ...mockMadeToStick })).rejects.toThrowError('You are not allowed to edit this StickItem');
    }
    );
  }
  );
  describe('deleteMadeToStick', () => {
    const mockMadeToStick = {
      'value': 'string',
      'x': 0,
      'y': 0,
      'w': 0,
      'h': 0,
      'type': 'string',
      'emailId': 'string',
      'backgroundColor': 'string',
      memberId: 1,
      projectId: 1,
      'i': 1,
    };
    it('should return deleted madeToStick item when called', async () => {
      jest.spyOn(prisma.madeToStick, 'findFirst').mockResolvedValue(mockMadeToStick);
      jest.spyOn(prisma.madeToStick, 'delete').mockResolvedValue(mockMadeToStick);
      const result = await madeToStickService.deleteMadeToStick(1, 1, 1);
      expect(result).toEqual(mockMadeToStick);
    });
    it('should return error when service throws error', async () => {
      jest.spyOn(prisma.madeToStick, 'findFirst').mockResolvedValue(mockMadeToStick);
      jest.spyOn(prisma.madeToStick, 'delete').mockRejectedValue(new Error('Bad Request'));
      await expect(madeToStickService.deleteMadeToStick({ ...mockMadeToStick })).rejects.toThrowError('You are not allowed to delete this StickItem');
    }
    );
  }
  );
});