const {describe, it, expect} = require('@jest/globals');
const prisma = require('../../src/prismaClient');
const leavesServices = require('../../src/services/leaves.services');

describe('leave services', () => {
  describe('getAllLeaves', () => {
    it('should return a list of all leaves in descending order of startDate', async () => {
      const getAllFunction = jest.spyOn(prisma.Leave, 'findMany').mockResolvedValue([]);
      const leaves = await leavesServices.getAllLeaves();
      expect(getAllFunction).toBeCalledWith({
        orderBy: {
          startDate: 'desc',
        },
      });
      expect(leaves).toEqual([]);
    });
  });

  describe('createLeave', () => {
    it('should create correct leave', async () => {
      const obj = {
        event: 'event',
        isRisk: true,
        startDate: '2021-01-01',
        endDate: '2021-01-02',
      };
      const createLeaveFunction = jest.spyOn(prisma.Leave, 'create').mockResolvedValue({...obj, leaveId: 1, userId: 1});
      const leave = await leavesServices.createLeave('event', true, '2021-01-01', '2021-01-02', {uid: 1, firstName: 'Ritik', lastName: 'Rajdev'});
      expect(createLeaveFunction).toBeCalledWith({
        data: {
          ...obj,
          userId: 1,
          userFullName: 'Ritik Rajdev',
        }
      });
      expect(leave).toEqual({
        leaveId: 1,
        userId: 1,
        ...obj
      });
    });
  });

  describe('editLeave', () => {
    const obj = {
      event: 'event',
      isRisk: true,
      startDate: '2021-01-01',
      endDate: '2021-01-02',
    };

    it('should throw error if leave not found', async () => {
      const findUniqueFunction = jest.spyOn(prisma.Leave, 'findUnique').mockResolvedValue(null);
      await expect(leavesServices.editLeave(1, 'event', true, '2021-01-01', '2021-01-02', {uid: 1})).rejects.toThrow('Leave not found');
      expect(findUniqueFunction).toBeCalledWith({
        where: {
          leaveId: 1,
        }
      });
    });

    it('should throw error if user is not allowed to edit leave', async () => {
      const findUniqueFunction = jest.spyOn(prisma.Leave, 'findUnique').mockResolvedValue({...obj, leaveId: 1, userId: 2});
      await expect(leavesServices.editLeave(1, 'event', true, '2021-01-01', '2021-01-02', {uid: 1})).rejects.toThrow('You are not allowed to edit this leave');
      expect(findUniqueFunction).toBeCalledWith({
        where: {
          leaveId: 1,
        }
      });
    });

    it('should edit leave if user is allowed to edit leave', async () => {
      const findUniqueFunction = jest.spyOn(prisma.Leave, 'findUnique').mockResolvedValue({...obj, leaveId: 1, userId: 1});
      const updateFunction = jest.spyOn(prisma.Leave, 'update').mockResolvedValue({...obj, leaveId: 1, userId: 1});
      const leave = await leavesServices.editLeave(1, 'event', true, '2021-01-01', '2021-01-02', {uid: 1});
      expect(findUniqueFunction).toBeCalledWith({
        where: {
          leaveId: 1,
        }
      });
      expect(updateFunction).toBeCalledWith({
        where: {
          leaveId: 1,
        },
        data: {
          ...obj,
        },
      });
      expect(leave).toEqual({
        leaveId: 1,
        userId: 1,
        ...obj
      });
    });
  });

  describe('deleteLeave', () => {
    it('should throw error if leave not found', async () => {
      const findUniqueFunction = jest.spyOn(prisma.Leave, 'findUnique').mockResolvedValue(null);
      await expect(leavesServices.deleteLeave(1, {uid: 1})).rejects.toThrow('Leave not found');
      expect(findUniqueFunction).toBeCalledWith({
        where: {
          leaveId: 1,
        }
      });
    });

    it('should throw error if user is not allowed to delete leave', async () => {
      const findUniqueFunction = jest.spyOn(prisma.Leave, 'findUnique').mockResolvedValue({leaveId: 1, userId: 2});
      await expect(leavesServices.deleteLeave(1, {uid: 1})).rejects.toThrow('You are not allowed to delete this leave');
      expect(findUniqueFunction).toBeCalledWith({
        where: {
          leaveId: 1,
        }
      });
    });

    it('should delete leave if user is allowed to delete leave', async () => {
      const findUniqueFunction = jest.spyOn(prisma.Leave, 'findUnique').mockResolvedValue({leaveId: 1, userId: 1});
      const deleteFunction = jest.spyOn(prisma.Leave, 'delete').mockResolvedValue({leaveId: 1, userId: 1});
      const leave = await leavesServices.deleteLeave(1, {uid: 1});
      expect(findUniqueFunction).toBeCalledWith({
        where: {
          leaveId: 1,
        }
      });
      expect(deleteFunction).toBeCalledWith({
        where: {
          leaveId: 1,
        },
      });
      expect(leave).toEqual({
        leaveId: 1,
        userId: 1,
      });
    });
  });
});