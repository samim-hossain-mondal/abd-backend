const { HttpError } = require('../errors');
const prisma = require('../prismaClient');

async function getAllLeaves() {
  return await prisma.Leave.findMany({
    orderBy: {
      startDate: 'desc',
    },
  });
}

async function createLeave(event, isRisk, startDate, endDate, user) {
  return await prisma.Leave.create({
    data: {
      event,
      isRisk,
      startDate,
      endDate,
      userId: user.uid,
      userFullName: user.firstName + ' ' + user.lastName,
    },
  });
}

async function editLeave(id, event, isRisk, startDate, endDate, user) {
  const leave = await prisma.Leave.findUnique({
    where: {
      leaveId: id,
    }
  });

  if (!leave) {
    throw new HttpError(404, 'Leave not found');
  }

  if (leave.userId !== user.uid) {
    throw new HttpError(403, 'You are not allowed to edit this leave');
  }

  return await prisma.Leave.update({
    where: {
      leaveId: id,
    },
    data: {
      event,
      isRisk,
      startDate,
      endDate,
    },
  });
}

async function deleteLeave(id, user) {
  const leave = await prisma.Leave.findUnique({
    where: {
      leaveId: id,
    }
  });

  if (!leave) {
    throw new HttpError(404, 'Leave not found');
  }

  if (leave.userId !== user.uid) {
    throw new HttpError(403, 'You are not allowed to delete this leave');
  }

  return await prisma.Leave.delete({
    where: {
      leaveId: id,
    },
  });
}

module.exports = {
  getAllLeaves,
  createLeave,
  editLeave,
  deleteLeave
};