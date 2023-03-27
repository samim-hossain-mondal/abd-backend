const { dashboardPrisma: prisma } = require('../../src/prismaClient');
const {
  getAllMadeToStick,
  createMadeToStick,
  editMadeToStick,
  deleteMadeToStick
} = require('../../src/services/madeToStick.services');

describe('getAllMadeToStick', () => {

  it('returns an array of madeToStick items', async () => {
    prisma.madeToStick.findMany = jest.fn().mockResolvedValue([
      { id: 1, name: 'Item 1', projectId: 123 },
      { id: 2, name: 'Item 2', projectId: 123 },
      { id: 3, name: 'Item 3', projectId: 456 }
    ]);

    const projectId = 123;
    const result = await getAllMadeToStick(projectId);
    expect(prisma.madeToStick.findMany).toHaveBeenCalledWith({ where: { projectId } });
    expect(result).toEqual([
      { id: 1, name: 'Item 1', projectId: 123 },
      { id: 2, name: 'Item 2', projectId: 123 },
      { id: 3, name: 'Item 3', projectId: 456 }
    ]);
  });
});

describe('createMadeToStick', () => {

  it('creates a new madeToStick item', async () => {
    prisma.madeToStick.create = jest.fn().mockResolvedValue({
      id: 1,
      value: 'Some value',
      emailId: 'some.email@example.com',
      x: 10,
      y: 20,
      w: 30,
      h: 40,
      type: 'Some type',
      backgroundColor: 'Some color',
      memberId: 123,
      projectId: 456,
    });

    const value = 'Some value';
    const emailId = 'some.email@example.com';
    const x = 10;
    const y = 20;
    const w = 30;
    const h = 40;
    const type = 'Some type';
    const backgroundColor = 'Some color';
    const memberId = 123;
    const projectId = 456;
    const result = await createMadeToStick(
      value, emailId, x, y, w, h, type, backgroundColor, memberId, projectId
    );

    expect(prisma.madeToStick.create).toHaveBeenCalledWith({
      data: { value, emailId, x, y, w, h, type, backgroundColor, memberId, projectId }
    });
    expect(result).toEqual({
      id: 1,
      value: 'Some value',
      emailId: 'some.email@example.com',
      x: 10,
      y: 20,
      w: 30,
      h: 40,
      type: 'Some type',
      backgroundColor: 'Some color',
      memberId: 123,
      projectId: 456,
    });
  });
});

describe('editMadeToStick', () => {

  it('edits an existing madeToStick item', async () => {
    prisma.madeToStick.findFirst = jest.fn().mockResolvedValue({
      i: 1,
      value: 'Some value',
      backgroundColor: 'Some color',
      x: 10,
      y: 20,
      w: 30,
      h: 40,
      type: 'Some type',
      emailId: 'some.email@example.com',
    });

    prisma.madeToStick.update = jest.fn().mockResolvedValue({
      i: 1,
      value: 'Some new value',
      backgroundColor: 'Some new color',
      x: 20,
      y: 30,
      w: 40,
      h: 50,
      type: 'Some new type',
      emailId: 'some.new.email@example.com',
    });

    const i = 1;
    const value = 'Some new value';
    const backgroundColor = 'Some new color';
    const x = 20;
    const y = 30;
    const w = 40;
    const h = 50;
    const type = 'Some new type';
    const emailId = 'some.new.email@example.com';
    const result = await editMadeToStick(i, value, backgroundColor, x, y, w, h, type, emailId);

    expect(prisma.madeToStick.findFirst).toHaveBeenCalledWith({ where: { i } });
    expect(prisma.madeToStick.update).toHaveBeenCalledWith({
      where: { i: 1 },
      data: { value, backgroundColor, x, y, w, h, type, emailId }
    });
    expect(result).toEqual({
      i: 1,
      value: 'Some value',
      backgroundColor: 'Some color',
      x: 10,
      y: 20,
      w: 30,
      h: 40,
      type: 'Some type',
      emailId: 'some.email@example.com',
    });
  });

  it('throws an error if the madeToStick item is not found', async () => {
    prisma.madeToStick.findFirst = jest.fn().mockResolvedValue(null);
    const i = 1;
    const value = 'Some value';
    const backgroundColor = 'Some color';
    const x = 10;
    const y = 20;
    const w = 30;
    const h = 40;
    const type = 'Some type';
    const emailId = 'some.email@example.com';
    await expect(editMadeToStick(i, value, backgroundColor, x, y, w, h, type, emailId))
      .rejects.toThrow('StickItem not found');
  });
});

describe('deleteMadeToStick', () => {
  it('deletes an existing madeToStick item', async () => {
    prisma.madeToStick.findFirst = jest.fn().mockResolvedValue({
      i: 1,
      value: 'Some value',
      backgroundColor: 'Some color',
      x: 10,
      y: 20,
      w: 30,
      h: 40,
      type: 'Some type',
      emailId: 'some.email@example.com',
    });

    prisma.madeToStick.delete = jest.fn().mockResolvedValue({
      i: 1,
      value: 'Some value',
      backgroundColor: 'Some color',
      x: 10,
      y: 20,
      w: 30,
      h: 40,
      type: 'Some type',
      emailId: 'some.email@example.com',
    });

    const i = 1;
    const result = await deleteMadeToStick(i);

    expect(prisma.madeToStick.findFirst).toHaveBeenCalledWith({ where: { i } });
    expect(prisma.madeToStick.delete).toHaveBeenCalledWith({ where: { i } });
    expect(result).toEqual({
      i: 1,
      value: 'Some value',
      backgroundColor: 'Some color',
      x: 10,
      y: 20,
      w: 30,
      h: 40,
      type: 'Some type',
      emailId: 'some.email@example.com',
    });
  });

  it('throws an error if the madeToStick item is not found', async () => {
    prisma.madeToStick.findFirst = jest.fn().mockResolvedValue(null);
    const i = 1;
    await expect(deleteMadeToStick(i)).rejects.toThrow('StickItem not found');
  });
});