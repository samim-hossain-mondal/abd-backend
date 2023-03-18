const prisma = require('../../src/prismaClient');
const madeToStickService = require('../../src/services/madeToStick.services');

describe('madeToStickServices', () => {
  describe('getAllMadeToStick', () => {
    it('should return all madeToStick item when called', async () => {
      const mockMadeToStick =[ {
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
    it('should return updated madeToStick item when called', async () => {
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
      jest.spyOn(prisma.madeToStick, 'update').mockResolvedValue(mockMadeToStick);
      const result = await madeToStickService.editMadeToStick(mockMadeToStick);
      expect(result).toEqual(mockMadeToStick);
    });
    it('should return error when service throws error', async () => {
      jest.spyOn(prisma.madeToStick, 'update').mockRejectedValue(new Error('Bad Request'));
      await expect(madeToStickService.editMadeToStick()).rejects.toThrowError('Bad Request');
    }
    );
  }
  );
  describe('deleteMadeToStick', () => {
    it('should return deleted madeToStick item when called', async () => {
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
      jest.spyOn(prisma.madeToStick, 'delete').mockResolvedValue(mockMadeToStick);
      const result = await madeToStickService.deleteMadeToStick(mockMadeToStick);
      expect(result).toEqual(mockMadeToStick);
    });
    it('should return error when service throws error', async () => {
      jest.spyOn(prisma.madeToStick, 'delete').mockRejectedValue(new Error('Bad Request'));
      await expect(madeToStickService.deleteMadeToStick()).rejects.toThrowError('Bad Request');
    }
    );
  }
  ); 
});