const celebrationBoardServices = require('../../../src/services/dsm/celebrationBoard.services');
const { dashboardPrisma: prisma } = require('../../../src/prismaClient');
const { HttpError } = require('../../../src/errors');
const celebrations = require('../../../mocks/dsm/celebration');

describe('Celebration Board Services', () => {
  describe('listCelebrations', () => {
    it('should return a list of all celebrations', async () => {
      const expected = celebrations;
      jest.spyOn(prisma.Celebration, 'findMany').mockResolvedValue(expected);
      const actual = await celebrationBoardServices.listCelebrations(1);
      expect(actual).toEqual(expected);
    });
    it('should throw an error if there is an error', async () => {
      jest.spyOn(prisma.Celebration, 'findMany').mockRejectedValue(new Error('Bad Request'));
      await expect(celebrationBoardServices.listCelebrations(1)).rejects.toThrow('Bad Request');
    });
  });

  describe('getCelebrationById', () => {
    it('should return a celebration by id', async () => {
      const expected = celebrations[0];
      jest.spyOn(prisma.Celebration, 'findFirst').mockResolvedValue(expected);
      const actual = await celebrationBoardServices.getCelebrationById(1, 1);
      expect(actual).toEqual(expected);
    });
    it('should throw an error if there is an error', async () => {
      jest.spyOn(prisma.Celebration, 'findFirst').mockRejectedValue(new Error('Bad Request'));
      await expect(celebrationBoardServices.getCelebrationById(1, 1)).rejects.toThrow('Bad Request');
    });
    it('should throw an error if no record is found', async () => {
      jest.spyOn(prisma.Celebration, 'findFirst').mockResolvedValue(null);
      await expect(celebrationBoardServices.getCelebrationById(1, 1)).rejects.toThrow(HttpError);
    });
  });

  describe('createCelebration', () => {
    it('should create a celebration', async () => {
      const expected = celebrations[0];
      jest.spyOn(prisma.Celebration, 'create').mockResolvedValue(expected);
      const actual = await celebrationBoardServices.createCelebration(expected);
      expect(actual).toEqual(expected);
    });
    it('should throw an error if there is an error', async () => {
      jest.spyOn(prisma.Celebration, 'create').mockRejectedValue(new Error('Bad Request'));
      await expect(celebrationBoardServices.createCelebration(celebrations[0])).rejects.toThrow('Bad Request');
    });
  });

  describe('updateCelebration', () => {
    it('should update a celebration', async () => {
      const expected = celebrations[0];
      jest.spyOn(prisma.Celebration, 'findFirst').mockResolvedValue(expected);
      jest.spyOn(prisma.Celebration, 'update').mockResolvedValue({ ...expected, content: 'new content' });
      const actual = await celebrationBoardServices.updateCelebrationById(1, expected.content, expected.type, true, 1);
      expect(actual).toEqual({ ...expected, content: 'new content' });
    });
    it('should throw error if no record is found', async () => {
      const expected = celebrations[0];
      jest.spyOn(prisma.Celebration, 'findFirst').mockResolvedValue(null);
      jest.spyOn(prisma.Celebration, 'update').mockResolvedValue(null);
      await expect(celebrationBoardServices.updateCelebrationById(1, expected.content, expected.type, true, 1)).rejects.toThrow(new HttpError(404, 'No Record Found'));
    });
  });

  describe('deleteCelebration', () => {
    it('should delete a celebration', async () => {
      const expected = celebrations[0];
      jest.spyOn(prisma.Celebration, 'findFirst').mockResolvedValue(expected);
      jest.spyOn(prisma.celebrationReactedUser, 'deleteMany').mockResolvedValue(undefined);
      jest.spyOn(prisma.Celebration, 'delete').mockResolvedValue(expected);
      const actual = await celebrationBoardServices.deleteCelebrationById(1, 1);
      expect(actual).toEqual(expected);
    });
    it('should throw error if no record is found', async () => {
      const expected = celebrations[0];
      jest.spyOn(prisma.Celebration, 'findFirst').mockResolvedValue(expected);
      jest.spyOn(prisma.celebrationReactedUser, 'deleteMany').mockResolvedValue(undefined);
      jest.spyOn(prisma.Celebration, 'delete').mockResolvedValue(null);
      await expect(celebrationBoardServices.deleteCelebrationById(1, 1)).rejects.toThrow(new HttpError(404, 'No Record Found'));
    });
  });
});