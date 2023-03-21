const teamInformationsController = require('../../src/controllers/teamInformations.controller');
const teamInformationsServices = require('../../src/services/teamInformations.service');
describe('get all teamInformations', () => {
  it('should return all teamInformations when called', async () => {
    const mockReq = {
      query: {},
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };
    const mockTeamInformation = [
      {
        'id': 1,
        'name': 'string',
        'emailId': 'string',
        'memberId': 1,
        'bio': 'string',
        'role': 'string',
        'message': 'string',
        'projectId': 1,
        'createdBy': 1,
        'createdAt': '2021-06-16T18:05:37.000Z',
        'updatedAt': '2021-06-16T18:05:37.000Z'
      }
    ];
    jest.spyOn(teamInformationsServices, 'getAllTeamInformations').mockResolvedValue(mockTeamInformation);
    await teamInformationsController.getAllTeamInformations(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(mockTeamInformation);
  }
  );
  it('should return error when service throws error', async () => {
    const mockReq = {
      query: {},
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    jest.spyOn(teamInformationsServices, 'getAllTeamInformations').mockRejectedValue(new Error('Bad Request'));
    await teamInformationsController.getAllTeamInformations(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  }
  );
});
describe('create teamInformations', () => {
  it('should return created teamInformations when called', async () => {
    const mockReq = {
      query: {},
      body: {
        'memberId': 1,
        'bio': 'string',
        'role': 'string',
        'projectId': 1,
        'startedDate': '2021-06-16T18:05:37.000Z',
        'endDate': '2021-06-16T18:05:37.000Z',
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };
    const mockTeamInformation = {
      'id': 1,
      'memberId': 1,
      'name': 'string',
      'emailId': 'string',
      'message': 'string',
      'bio': 'string',
      'role': 'string',
      'projectId': 1,
      'startedDate': '2021-06-16T18:05:37.000Z',
      'endDate': '2021-06-16T18:05:37.000Z',
    };
    jest.spyOn(teamInformationsServices, 'createTeamInformation').mockResolvedValue(mockTeamInformation);
    await teamInformationsController.createTeamInformation(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.json).toBeCalledWith(mockTeamInformation);
  }
  );
  it('should return error when service throws error', async () => {
    const mockReq = {
      query: {},
      body: {
        'memberId': 1,
        'bio': 'string',
        'role': 'string',
        'projectId': 1,
        'startedDate': '2021-06-16T18:05:37.000Z',
        'endDate': '2021-06-16T18:05:37.000Z',
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    jest.spyOn(teamInformationsServices, 'createTeamInformation').mockRejectedValue(new Error('Bad Request'));
    await teamInformationsController.createTeamInformation(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  }
  );
});
describe('updateTeamInformation', () => {
  it('should return updated teamInformations when called', async () => {
    const mockReq = {
      query: {},
      body: {
        'name': 'string',
        'memberId': 1,
        'bio': 'string',
        'role': 'string',
        'projectId': 1,
        'message': 'string',
        'startDate': '2021-06-16T18:05:37.000Z',
        'endDate': '2021-06-16T18:05:37.000Z',
      },
      params: {
        id: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };
    const mockTeamInformation = {
      'id': 1,
      'name': 'string',
      'memberId': 1,
      'bio': 'string',
      'role': 'string',
      'projectId': 1,
      'message': 'string',
      'startDate': '2021-06-16T18:05:37.000Z',
      'endDate': '2021-06-16T18:05:37.000Z',
    };
    jest.spyOn(teamInformationsServices, 'updateTeamInformation').mockResolvedValue(mockTeamInformation);
    await teamInformationsController.updateTeamInformation(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(mockTeamInformation);
  }
  );
  it('should return error when service throws error', async () => {
    const mockReq = {
      query: {},
      body: {
        'name': 'string',
        'email': 'string',
        'phone': 'string',
        'projectId': 1,
        'createdBy': 1,
      },
      params: {
        id: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    jest.spyOn(teamInformationsServices, 'updateTeamInformation').mockRejectedValue(new Error('Bad Request'));
    await teamInformationsController.updateTeamInformation(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  }
  );
});
describe('deleteTeamInformation', () => {
  it('should return deleted teamInformations when called', async () => {
    const mockReq = {
      query: {},
      params: {
        id: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };
    const mockTeamInformation = {
      'id': 1,
      'name': 'string',
      'memberId': 1,
      'bio': 'string',
      'role': 'string',
      'projectId': 1,
      'message': 'string',
      'startDate': '2021-06-16T18:05:37.000Z',
      'endDate': '2021-06-16T18:05:37.000Z',
    };
    jest.spyOn(teamInformationsServices, 'deleteTeamInformation').mockResolvedValue(mockTeamInformation);
    await teamInformationsController.deleteTeamInformation(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(mockTeamInformation);
  }
  );
  it('should return error when service throws error', async () => {
    const mockReq = {
      query: {},
      params: {
        id: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    jest.spyOn(teamInformationsServices, 'deleteTeamInformation').mockRejectedValue(new Error('Bad Request'));
    await teamInformationsController.deleteTeamInformation(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  }
  );
}
);
describe('get teamInformations by project id', () => {
  it('should return teamInformations when called', async () => {
    const mockReq = {
      query: {},
      params: {
        projectId: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };
    const mockTeamInformation = [
      {
        'id': 1,
        'name': 'string',
        'memberId': 1,
        'bio': 'string',
        'role': 'string',
        'projectId': 1,
        'message': 'string',
        'startDate': '2021-06-16T18:05:37.000Z',
        'endDate': '2021-06-16T18:05:37.000Z',
      }
    ];
    jest.spyOn(teamInformationsServices, 'getTeamInformationsByProjectId').mockResolvedValue(mockTeamInformation);
    await teamInformationsController.getTeamInformationsByProjectId(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(mockTeamInformation);
  }
  );
  it('should return error when service throws error', async () => {
    const mockReq = {
      query: {},
      params: {
        projectId: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    jest.spyOn(teamInformationsServices, 'getTeamInformationsByProjectId').mockRejectedValue(new Error('Bad Request'));
    await teamInformationsController.getTeamInformationsByProjectId(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  }
  );
}
);