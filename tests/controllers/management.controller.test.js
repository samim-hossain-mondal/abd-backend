const { describe, it, expect } = require('@jest/globals');
const managementController = require('../../src/controllers/management.controller');
const { 
  createNewAgileDashboardInDb,
  allProjectsByCurrentUserInDb,
  allMembersByProjectIdInDb,
  addProjectMemberInDb,
  removeProjectMemberByEmailInDb,
  removeProjectMemberByIdInDb,
  updateMemberRoleByEmailInDb,
  updateMemberRoleByIdInDb,
  updateProjectInfoInDb,
  deleteProjectInDb,
  getProjectDetailsByIdInDb,
  createNewMemberInDb,
  getMemberDetailsByIdInDb,
  updateMemberInfoInDb,
  deleteMemberInDb,
  getProjectMemberDetailsByIdInDb
} = require('../../src/services/management.service');

jest.mock('../../src/services/management.service');

describe('Management Controller', () => {
  describe('createNewProject', () => {

    const project = {
      projectName: 'Test Project',
      projectDescription: 'Test Project Description',
      projectId: 1,
      isDeleted: false,
      projectMembers: [
        {
          email: 'janedoe@email.com',
          role: 'ADMIN',
          memberId: 1
        }
      ],
      _count: {
        projectMembers: 1
      }
    };


    it('should return 201 status code and a message with project', async () => {
      const mockReq = {
        body: {
          projectName: 'Test Project',
          projectDescription: 'Test Project Description'
        },
        user: {
          email: 'janedoe@email.com',
        },
      };

      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      const mockNext = jest.fn();

      createNewAgileDashboardInDb.mockResolvedValue(project);
      await managementController.createNewProject(mockReq, mockRes, mockNext);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Successfully created new project.',
        result: project
      });
    });
  });
});