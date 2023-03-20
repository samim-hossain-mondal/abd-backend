const poNotesController = require('../../src/controllers/poNotes.controller');
const poNoteServices = require('../../src/services/poNoteServices');

const { HttpError } = require('../../src/errors');
describe('get PO Notes (all/list)', () => {
  const poNotes = [
    {
      'noteId': 8,
      'type': 'AGENDA_ITEM',
      'note': 'string',
      'status': 'PENDING',
      'dueDate': null,
      'issueLink': null,
    },
    {
      'noteId': 7,
      'type': 'KEY_DECISION',
      'note': 'string',
      'status': 'NONE',
      'dueDate': null,
      'issueLink': null
    }
  ];

  it('should return array of PO notes as objects', async () => {
    const mockReq = {
      query: {},
      params: {
        projectId: 1,
        id: 1
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };

    jest.spyOn(poNoteServices, 'getPONotesByQuickFilter').mockResolvedValue(poNotes);

    await poNotesController.listPONotes(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(poNotes);
  });
  it('should return error when service throws error', async () => {
    const mockReq = {
      query: {
        xyz: ''
      }, params: {
        projectId: 1,
        id: 1
      },

    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    jest.spyOn(poNoteServices, 'getPONotesByQuickFilter').mockRejectedValue(new Error('Bad Request'));
    await poNotesController.listPONotes(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  });
});

describe('get PO Notes by ID', () => {
  const poNote = {
    'noteId': 8,
    'type': 'AGENDA_ITEM',
    'note': 'string',
    'status': 'PENDING',
    'dueDate': null,
    'issueLink': null
  };

  it('should return PO notes as an object', async () => {
    const mockReq = {
      query: {},
      params: {
        projectId: 1,
        id: 1
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };

    jest.spyOn(poNoteServices, 'getPONoteByID').mockResolvedValue(poNote);

    await poNotesController.detailPONote(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(poNote);
  });
  it('should return error when service throws error', async () => {
    const mockReq = {
      params: {
        projectId: 1,
        id: 1
      },
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    jest.spyOn(poNoteServices, 'getPONoteByID').mockRejectedValue(new Error('Bad Request'));
    await poNotesController.detailPONote(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  });
});

describe('create PO Notes by ID', () => {
  const poNote = {
    'noteId': 8,
    'type': 'AGENDA_ITEM',
    'note': 'string',
    'status': 'PENDING',
    'dueDate': null,
    'issueLink': null,
    memberId: 1
  };

  it('should return new created PO note as an object', async () => {
    const mockReq = {
      body: {
        'note': 'I\'m note',
        'type': 'AGENDA_ITEM'
      },
      params: {
        projectId: 1,
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

    jest.spyOn(poNoteServices, 'createValidPONote').mockResolvedValue(poNote);

    await poNotesController.createPONote(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.json).toBeCalledWith(poNote);
  });
  it('should return error when there is empty/no body', async () => {
    const mockReq = {
      body: {
      },
      params: {
        projectId: 1,
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

    jest.spyOn(poNoteServices, 'createValidPONote').mockRejectedValue(new Error('Bad Request'));
    await poNotesController.createPONote(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  });
  it('should return error when service throws error', async () => {
    const mockReq = {
      body: {
        'note': 'I\'m note',
        'type': 'AGENDA_ITEM'
      },
      params: {
        projectId: 1,
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

    jest.spyOn(poNoteServices, 'createValidPONote').mockRejectedValue(new Error('Bad Request'));
    await poNotesController.createPONote(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  });
});

describe('update PO Notes by ID', () => {
  const poNote = {
    'noteId': 8,
    'type': 'AGENDA_ITEM',
    'note': 'string',
    'status': 'PENDING',
    'dueDate': null,
    'issueLink': null,
    memberId: 1
  };

  it('should return updated PO note as an object', async () => {
    const mockReq = {
      body: {
        'note': 'I\'m note',
        'type': 'ACTION_ITEM',
        'dueDate': '2023-01-27',
        'status': 'COMPLETED',
        'issueLink': 'http://dummyUrl.com'
      },
      params: {
        projectId: 1,
        id: 1
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

    jest.spyOn(poNoteServices, 'updatePONoteById').mockResolvedValue(poNote);

    await poNotesController.editPONote(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(poNote);
  });
  it('should return error when there is empty/no body', async () => {
    const mockReq = {
      body: {
      },
      params: {
        projectId: 1,
        id: 1
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

    jest.spyOn(poNoteServices, 'updatePONoteById').mockRejectedValue(new Error('Bad Request'));
    await poNotesController.editPONote(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  });
  it('should return error when service throws error', async () => {
    const mockReq = {
      body: {
        'xyz': 'string',
        'type': 'ACTION_ITEM',
        'dueDate': '2023-01-27',
        'status': 'COMPLETED',
        'issueLink': 'http://dummyUrl.com'
      },
      params: {
        projectId: 1,
        id: 1
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

    jest.spyOn(poNoteServices, 'updatePONoteById').mockRejectedValue(new Error('Bad Request'));
    await poNotesController.editPONote(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  });
});

describe('SOFT delete PO Notes by ID', () => {
  const deleteNoteObj = {
    count: 1
  };

  it('should return 204 code with no response data', async () => {
    const mockReq = {
      body: {},
      params: {
        projectId: 1,
        id: 1
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

    jest.spyOn(poNoteServices, 'softDeletePONoteById').mockResolvedValue(deleteNoteObj);

    await poNotesController.deletePONote(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(204);
    expect(mockRes.json).toBeCalled();
  });
  it('should return error when service throws error', async () => {
    const mockReq = {
      body: {},
      params: {
        projectId: 1,
        id: 1
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

    jest.spyOn(poNoteServices, 'softDeletePONoteById').mockRejectedValue(new Error('Bad Request'));
    await poNotesController.deletePONote(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  });
  it('should return error when invalid property is passed', async () => {
    const mockReq = {
      body: {},
      params: {
        projectId: 1,
        id: 1
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

    jest.spyOn(poNoteServices, 'softDeletePONoteById').mockRejectedValue(new HttpError(400, 'Bad Request'));
    await poNotesController.deletePONote(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new HttpError(400, 'Bad Request'));
  });
});

describe('HARD delete PO Notes by ID', () => {
  const deleteNoteObj = {
    count: 1
  };

  it('should return 204 code with no response data', async () => {
    const mockReq = {
      body: {
        'deleteType': 'HARD'
      },
      params: {
        projectId: 1,
        id: 1
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

    jest.spyOn(poNoteServices, 'hardDeletePONoteById').mockResolvedValue(deleteNoteObj);

    await poNotesController.deletePONote(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(204);
    expect(mockRes.json).toBeCalled();
  });
  it('should return error when service throws error', async () => {
    const mockReq = {
      body: {
        deleteType: 'HARD'
      },
      params: {
        projectId: 1,
        id: 1
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

    jest.spyOn(poNoteServices, 'hardDeletePONoteById').mockRejectedValue(new Error('Bad Request'));
    await poNotesController.deletePONote(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Bad Request'));
  });
});