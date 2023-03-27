const { HttpError } = require('../errors');
const { dashboardPrisma: prisma } = require('../prismaClient');

const getAllMadeToStick = async (projectId) => {
  const madeToStickItem = await prisma.madeToStick.findMany({ where: { projectId } });
  return madeToStickItem;
};

const createMadeToStick = async (value, emailId, x, y, w, h, type, backgroundColor, memberId, projectId) => {
  const madeToStickItem = await prisma.madeToStick.create({
    data: { value, emailId, x, y, w, h, type, backgroundColor, memberId, projectId }
  });
  return madeToStickItem;
};

const editMadeToStick = async (i, value, backgroundColor, x, y, w, h, type, emailId) => {
  const madeToStickDetails = { value, backgroundColor, x, y, w, h, type, emailId };
  const madeToStickItem = await prisma.madeToStick.findFirst({ where: { i } });
  if (!madeToStickItem) {
    throw new HttpError(404, 'StickItem not found');
  }
  await prisma.madeToStick.update({
    where: { i: i },
    data: madeToStickDetails
  });
  return madeToStickItem;
};

const deleteMadeToStick = async (i) => {
  const madeToStickItem = await prisma.madeToStick.findFirst({ where: { i } });
  if (!madeToStickItem) {
    throw new HttpError(404, 'StickItem not found');
  }
  await prisma.madeToStick.delete({ where: { i } });
  return madeToStickItem;
};

module.exports = {
  createMadeToStick,
  editMadeToStick,
  deleteMadeToStick,
  getAllMadeToStick
};