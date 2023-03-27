const {
  getAllMadeToStick,
  createMadeToStick,
  editMadeToStick,
  deleteMadeToStick
} = require('../../src/controllers/madeToStick.controller');
const madeToStickService = require('../../src/services/madeToStick.services');

jest.mock('../../src/services/madeToStick.services');

describe('getAllMadeToStick controller', () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  it('should return all madeToStick items for a given projectId', async () => {
    const mockMadeToStickItem = [{ id: 1, projectId: 123, name: 'item1' }, { id: 2, projectId: 123, name: 'item2' }];
    const req = { params: { projectId: '123' } };
    const res = mockResponse();
    madeToStickService.getAllMadeToStick.mockResolvedValue(mockMadeToStickItem);
    await getAllMadeToStick(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockMadeToStickItem);
    expect(madeToStickService.getAllMadeToStick).toHaveBeenCalledWith(123);
  });

  it('should call the error handling middleware if an error occurs', async () => {
    const mockError = new Error('Error fetching madeToStick items');
    const req = { params: { projectId: '123' } };
    const res = mockResponse();
    madeToStickService.getAllMadeToStick.mockRejectedValue(mockError);
    const next = jest.fn();
    await getAllMadeToStick(req, res, next);
    expect(next).toHaveBeenCalledWith(mockError);
  });
});

describe('createMadeToStick controller', () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  it('should create a new madeToStick item for a given projectId and memberId', async () => {
    const mockMadeToStickItem = { id: 1, projectId: 123, memberId: 456, name: 'item1' };
    const req = {
      params: { projectId: '123' },
      user: { memberId: '456' },
      body: { value: 'test', emailId: 'test@test.com', x: 0, y: 0, w: 100, h: 100, type: 'note', backgroundColor: 'blue' }
    };
    const res = mockResponse();
    madeToStickService.createMadeToStick.mockResolvedValue(mockMadeToStickItem);
    await createMadeToStick(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockMadeToStickItem);
    expect(madeToStickService.createMadeToStick).toHaveBeenCalledWith(
      'test', 'test@test.com', 0, 0, 100, 100, 'note', 'blue', 456, 123
    );
  });

  it('should call the error handling middleware if an error occurs', async () => {
    const mockError = new Error('Error creating madeToStick item');
    const req = {
      params: { projectId: '123' },
      user: { memberId: '456' },
      body: { value: 'test', emailId: 'test@test.com', x: 0, y: 0, w: 100, h: 100, type: 'note', backgroundColor: 'blue' }
    };
    const res = mockResponse();
    madeToStickService.createMadeToStick.mockRejectedValue(mockError);
    const next = jest.fn();
    await createMadeToStick(req, res, next);
    expect(next).toHaveBeenCalledWith(mockError);
  });
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe('editMadeToStick', () => {
  it('should edit an existing madeToStick item', async () => {
    const mockMadeToStickItem = {
      id: 1, value: 'test', backgroundColor: 'blue', x: 0, y: 0, w: 100, h: 100, type: 'note', emailId: 'test@test.com'
    };
    const req = { params: { i: '1' }, body: { value: 'updated test' } };
    const res = mockResponse();
    madeToStickService.editMadeToStick.mockResolvedValue(mockMadeToStickItem);
    await editMadeToStick(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockMadeToStickItem);
    expect(madeToStickService.editMadeToStick).toHaveBeenCalledWith(
      '1', 'updated test', undefined, undefined, undefined, undefined, undefined, undefined, undefined
    );
  });

  it('should call the error handling middleware if an error occurs', async () => {
    const mockError = new Error('Error editing madeToStick item');
    const req = { params: { i: '1' }, body: { value: 'updated test' } };
    const res = mockResponse();
    madeToStickService.editMadeToStick.mockRejectedValue(mockError);
    const next = jest.fn();
    await editMadeToStick(req, res, next);
    expect(next).toHaveBeenCalledWith(mockError);
  });
});

describe('deleteMadeToStick', () => {
  it('should delete an existing madeToStick item', async () => {
    const mockMadeToStickItem = {
      id: 1, value: 'test', backgroundColor: 'blue', x: 0, y: 0, w: 100, h: 100, type: 'note', emailId: 'test@test.com'
    };
    const req = { params: { i: '1' } };
    const res = mockResponse();
    madeToStickService.deleteMadeToStick.mockResolvedValue(mockMadeToStickItem);
    await deleteMadeToStick(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockMadeToStickItem);
    expect(madeToStickService.deleteMadeToStick).toHaveBeenCalledWith('1');
  });

  it('should call the error handling middleware if an error occurs', async () => {
    const mockError = new Error('Error deleting madeToStick item');
    const req = { params: { i: '1' } };
    const res = mockResponse();
    madeToStickService.deleteMadeToStick.mockRejectedValue(mockError);
    const next = jest.fn();
    await deleteMadeToStick(req, res, next);
    expect(next).toHaveBeenCalledWith(mockError);
  });
});