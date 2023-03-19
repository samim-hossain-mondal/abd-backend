const madeToStickControllers = require('../../src/controllers/madeToStick.controller');
const madeToStickServices = require('../../src/services/madeToStick.services');

describe('getAllMadeToStick', () => {
  it('should return all madeToStick item when called', async () => {
    const mockReq = {
      query: {},
      params: {
        projectId: 1,
        i: 1
      },
      user: {
        memberId: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };
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
    jest.spyOn(madeToStickServices, 'getAllMadeToStick').mockResolvedValue(mockMadeToStick);
    await madeToStickControllers.getAllMadeToStick(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(mockMadeToStick);
  });
  it('should return error when service throws error', async () => {
    const mockReq = {
      query: {},
      params: {
        projectId: 1,
        i: 1
      },
      user: {
        memberId: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    jest.spyOn(madeToStickServices, 'getAllMadeToStick').mockRejectedValue(new Error('Bad Request'));
    await madeToStickControllers.getAllMadeToStick(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  }
  );
});
describe('addMadeToStick', () => {
  it('should return added madeToStick item when called', async () => {
    const mockReq = {
      query: {},
      params: {
        projectId: 1,
        i: 1
      },
      user: {
        memberId: 1
      },
      body: {
        'value': 'string',
        'x': 0,
        'y': 0,
        'w': 0,
        'h': 0,
        'type': 'string',
        'emailId': 'string',
        'backgroundColor': 'string',
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };
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
    jest.spyOn(madeToStickServices, 'createMadeToStick').mockResolvedValue(mockMadeToStick);
    await madeToStickControllers.createMadeToStick(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(mockMadeToStick);
  });
  it('should return error when service throws error', async () => {
    const mockReq = {
      query: {},
      body: {
        'value': 'string',
        'x': 0,
        'y': 0,
        'w': 0,
        'h': 0,
        'type': 'string',
        'emailId': 'string',
        'backgroundColor': 'string',
      },
      params: {
        projectId: 1,
        i: 1
      },
      user: {
        memberId: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    jest.spyOn(madeToStickServices, 'createMadeToStick').mockRejectedValue(new Error('Bad Request'));
    await madeToStickControllers.createMadeToStick(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  }
  );
});
describe('editMadeToStick', () => {
  it('should return edited madeToStick item when called', async () => {
    const mockReq = {
      query: {},
      body: {
        'value': 'string',
        'x': 0,
        'y': 0,
        'w': 0,
        'h': 0,
        'type': 'string',
        'emailId': 'string',
        'backgroundColor': 'string',
      },
      params: {
        projectId: 1,
        i: 1
      },
      user: {
        memberId: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };
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
    jest.spyOn(madeToStickServices, 'editMadeToStick').mockResolvedValue(mockMadeToStick);
    await madeToStickControllers.editMadeToStick(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(mockMadeToStick);
  }
  );
  it('should return error when service throws error', async () => {
    const mockReq = {
      query: {},
      body: {
        'value': 'string',
        'x': 0,
        'y': 0,
        'w': 0,
        'h': 0,
        'type': 'string',
        'emailId': 'string',
        'backgroundColor': 'string',
      },
      params: {
        projectId: 1,
        i: 1
      },
      user: {
        memberId: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    jest.spyOn(madeToStickServices, 'editMadeToStick').mockRejectedValue(new Error('Bad Request'));
    await madeToStickControllers.editMadeToStick(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  }
  );
});
describe('deleteMadeToStick', () => {
  it('should return deleted madeToStick item when called', async () => {
    const mockReq = {
      query: {},
      params: {
        projectId: 1,
        i: 1
      },
      user: {
        memberId: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };
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
    jest.spyOn(madeToStickServices, 'deleteMadeToStick').mockResolvedValue(mockMadeToStick);
    await madeToStickControllers.deleteMadeToStick(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(mockMadeToStick);
  }
  );
  it('should return error when service throws error', async () => {
    const mockReq = {
      query: {},
      params: {
        projectId: 1,
        i: 1
      },
      user: {
        memberId: 1
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    jest.spyOn(madeToStickServices, 'deleteMadeToStick').mockRejectedValue(new Error('Bad Request'));
    await madeToStickControllers.deleteMadeToStick(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  }
  );
});