const { describe, it, expect } = require('@jest/globals');
const leavesController = require('../../src/controllers/leaves.controller');
const leavesServices = require('../../src/services/leaves.services');

describe('Leaves Controller', () => {
  describe('getAllLeaves', () => {
    it('should go to next middleware if there is an error', async () => {
      const req = {
        params: {
          projectId: 1,
          id: 1
        },
        user: {
          memberId: 1
        }
      };
      const res = {};
      const next = jest.fn();

      const errInstance = new Error('Bad Request');
      jest.spyOn(leavesServices, 'getAllLeaves').mockRejectedValue(errInstance);
      await leavesController.getAllLeaves(req, res, next);
      expect(next).toHaveBeenCalledWith(errInstance);
    });

    it('should send a list of all leaves', async () => {
      const req = {
        params: {
          projectId: 1,
          id: 1
        },
        user: {
          memberId: 1
        }
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const next = jest.fn();

      jest.spyOn(leavesServices, 'getAllLeaves').mockResolvedValue([]);
      await leavesController.getAllLeaves(req, res, next);
      expect(res.json).toHaveBeenCalledWith([]);
      expect(res.status).toHaveBeenCalledWith(200);
    });
  });

  describe('createLeave', () => {
    it('should go to next middleware if there is an error', async () => {
      const req = {
        body: {},
        params: {
          projectId: 1,
          id: 1
        },
        user: {
          memberId: 1
        }
      };
      const res = {};
      const next = jest.fn();

      const errInstance = new Error('Bad Request');
      jest.spyOn(leavesServices, 'createLeave').mockRejectedValue(errInstance);
      await leavesController.createLeave(req, res, next);
      expect(next).toHaveBeenCalledWith(errInstance);
    });

    it('should send leave object after creation', async () => {
      const req = {
        body: {},
        params: {
          projectId: 1,
          id: 1
        },
        user: {
          memberId: 1
        }
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const next = jest.fn();

      jest.spyOn(leavesServices, 'createLeave').mockResolvedValue({});
      await leavesController.createLeave(req, res, next);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({});
    });
  });

  describe('editLeave', () => {
    it('should go to next middleware if there is an error', async () => {
      const req = {
        body: {},
        params: {
          projectId: 1,
          id: 1
        },
        user: {
          memberId: 1
        }
      };
      const res = {};
      const next = jest.fn();

      const errInstance = new Error('Bad Request');
      jest.spyOn(leavesServices, 'editLeave').mockRejectedValue(errInstance);
      await leavesController.editLeave(req, res, next);
      expect(next).toHaveBeenCalledWith(errInstance);
    });

    it('should send leave object after editing', async () => {
      const req = {
        params: {
          projectId: 1,
          id: 1
        },
        user: {
          memberId: 1
        },
        body: {}
      };
      const res = { json: jest.fn() };
      const next = jest.fn();

      jest.spyOn(leavesServices, 'editLeave').mockResolvedValue({});
      await leavesController.editLeave(req, res, next);
      expect(res.json).toHaveBeenCalledWith({});
    });
  });

  describe('deleteLeave', () => {
    it('should go to next middleware if there is an error', async () => {
      const req = {
        params: {
          projectId: 1,
          id: 1
        },
        user: {
          memberId: 1
        }
      };
      const res = {};
      const next = jest.fn();

      const errInstance = new Error('Bad Request');
      jest.spyOn(leavesServices, 'deleteLeave').mockRejectedValue(errInstance);
      await leavesController.deleteLeave(req, res, next);
      expect(next).toHaveBeenCalledWith(errInstance);
    });

    it('should send 204 status after deleting', async () => {
      const req = {
        params: {
          projectId: 1,
          id: 1
        },
        user: {
          memberId: 1
        }
      };
      const res = { sendStatus: jest.fn() };
      const next = jest.fn();

      jest.spyOn(leavesServices, 'deleteLeave').mockResolvedValue({});
      await leavesController.deleteLeave(req, res, next);
      expect(res.sendStatus).toHaveBeenCalledWith(204);
    });
  });
});