const { HttpError } = require('../errors');
const { dashboardPrisma: prisma } = require('../prismaClient');

async function getAllLeaves(projectId) {
  return await prisma.Leave.findMany({
    where: {
      projectId
    },
    orderBy: {
      startDate: 'desc',
    },
  });
}

async function createLeave(event, isRisk, startDate, endDate, user, projectId) {
  return await prisma.Leave.create({
    data: {
      event,
      isRisk,
      startDate,
      endDate,
      projectId,
      memberId: user.memberId,
      userFullName: user.firstName + ' ' + user.lastName,
    },
  });
}

async function editLeave(id, event, isRisk, startDate, endDate, user, projectId) {
  const leave = await prisma.Leave.findFirst({
    where: {
      leaveId: id,
      projectId
    }
  });

  if (!leave) {
    throw new HttpError(404, 'Leave not found');
  }

  if (leave.memberId !== user.memberId) {
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

async function deleteLeave(id, user, projectId) {
  const leave = await prisma.Leave.findFirst({
    where: {
      leaveId: id,
      projectId
    }
  });

  if (!leave) {
    throw new HttpError(404, 'Leave not found');
  }

  if (leave.memberId !== user.memberId) {
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