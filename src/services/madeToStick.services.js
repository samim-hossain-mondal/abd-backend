const { HttpError } = require('../errors');
const prisma = require('../prismaClient');

// service to create a new madeToStick
const createMadeToStick = async (
  value,
  x,
  y,
  w,
  h,
  type,
  emailId,
  backgroundColor,
  memberId,
  projectId
) => {
  const madeToStickDetails = {
    value,
    backgroundColor,
    x,
    y,
    w,
    h,
    type,
    emailId,
    memberId,
    projectId
  };
  const madeToStickItem = await prisma.madeToStick.create({
    data: madeToStickDetails
  });
  return madeToStickItem;
};

// service to edit a madeToStick
const editMadeToStick = async (value,
  x,
  y,
  w,
  h,
  type,
  emailId,
  backgroundColor,
  i,
  memberId,
  projectId
) => {
  const madeToStickDetails = {
    value,
    backgroundColor,
    x,
    y,
    w,
    h,
    type,
    emailId
  };

  const madeToStickItem = await prisma.madeToStick.findFirst({
    where: {
      i: i,
      projectId
    }
  });

  if (!madeToStickItem) {
    throw new HttpError(404, 'StickItem not found');
  }

  if (madeToStickItem.memberId !== memberId) {
    throw new HttpError(403, 'You are not allowed to edit this StickItem');
  }

  await prisma.madeToStick.update({
    where: {
      i: i
    },
    data: madeToStickDetails
  });

  return madeToStickItem;
};

const deleteMadeToStick = async (i, memberId, projectId) => {

  const madeToStickItem = await prisma.madeToStick.findFirst({
    where: {
      i: i,
      projectId
    }
  });

  if (!madeToStickItem) {
    throw new HttpError(404, 'StickItem not found');
  }

  if (madeToStickItem.memberId !== memberId) {
    throw new HttpError(403, 'You are not allowed to delete this StickItem');
  }

  await prisma.madeToStick.delete({
    where: {
      i: i,
      projectId
    }
  });

  return madeToStickItem;
};

const getAllMadeToStick = async (projectId) => {
  const madeToStickItem = await prisma.madeToStick.findMany({
    where: {
      projectId
    }
  });
  return madeToStickItem;
};
module.exports = {
  createMadeToStick,
  editMadeToStick,
  deleteMadeToStick,
  getAllMadeToStick
};