const { HttpError } = require('../../errors');
const { dashboardPrisma } = require('../../prismaClient');
const prismaUtils = require('../../utils/prismaUtils');
const createNotificationService = require('../../utils/createNotification');

const selectOnlyValidReactionFields = {
  select: {
    reactionId: true,
    celebrationId: true,
    memberId: true
  }
};
const selectOnlyValidCelebrationBoardFields = (isAnonymous) => ({
  select: {
    celebrationId: true,
    isAnonymous: true,
    author: !isAnonymous,
    content: true,
    type: true,
    reaction: {
      take: 3,
      where: {
        isRemoved: false,
      },
      select: {
        memberId: true,
      }
    },
    createdAt: true,
    projectId: true,
    memberId: !isAnonymous,
  }
});

const filterByAnonymous = (celebrations, memberId) => {
  return celebrations.map((celebration) => {
    if (celebration.isAnonymous) {
      return {
        ...celebration,
        ...(celebration.memberId !== memberId && {
          author: undefined,
          memberId: undefined
        })
      };
    }
    return celebration;
  });
};

// get list of all celebrations
const listCelebrations = async (projectId, memberId, page = 1, limit = 10) => {
  const paginationObj = prismaUtils.getPaginationObject(page, limit);

  const celebrations = await dashboardPrisma.Celebration.findMany({
    where: {
      projectId
    },
    orderBy: {
      createdAt: 'desc',
    },
    ...(paginationObj && paginationObj),
    ...selectOnlyValidCelebrationBoardFields(false)
  }
  );
  return filterByAnonymous(celebrations, memberId);
};

// get a celebration by id
const getCelebrationById = async (celebrationId, projectId) => {
  const celebration = await dashboardPrisma.Celebration.findFirst({
    where: {
      celebrationId,
      projectId
    },
    ...selectOnlyValidCelebrationBoardFields(true)
  }
  );
  if (!celebration) throw new HttpError(404, 'No Record Found');
  return filterByAnonymous([celebration])[0];
};

// create a new celebration
const createCelebration = async (author, memberId, content, type, isAnonymous = false, projectId) => {
  const newCelebration = await dashboardPrisma.Celebration.create({
    data: {
      author,
      memberId,
      isAnonymous,
      content,
      type,
      projectId
    },
    ...selectOnlyValidCelebrationBoardFields(false)
  }
  );
  createNotificationService.createNotification(content,projectId,newCelebration.celebrationId,'CELEBRATION');
  return newCelebration;
};

// update a celebration
const updateCelebrationById = async (celebrationId, content, type, isAnonymous, memberId, projectId) => {
  const celebration = await dashboardPrisma.Celebration.findFirst({
    where: {
      celebrationId,
      projectId
    },
    select: {
      memberId: true
    }
  });
  if (!celebration) throw new HttpError(404, 'No Record Found');
  if (celebration.memberId !== memberId) throw new HttpError(403, 'You are not authorized to perform this action');

  const updatedCelebration = await dashboardPrisma.Celebration.update({
    where: {
      celebrationId
    },
    data: {
      content,
      type,
      isAnonymous
    },
    ...selectOnlyValidCelebrationBoardFields(false)
  });

  return updatedCelebration;
};

// delete a celebration
const deleteCelebrationById = async (celebrationId, memberId, projectId) => {
  const celebration = await dashboardPrisma.Celebration.findFirst({
    where: {
      celebrationId,
      projectId
    },
    select: {
      memberId: true
    }
  });
  if (!celebration) throw new HttpError(404, 'No Record Found');
  if (celebration.memberId !== memberId) throw new HttpError(403, 'You are not authorized to perform this action');

  await dashboardPrisma.celebrationReactedUser.deleteMany({
    where: {
      celebrationId
    }
  });

  const deletedCelebration = await dashboardPrisma.Celebration.delete({
    where: {
      celebrationId
    },
    ...selectOnlyValidCelebrationBoardFields(false)
  }
  );
  if (!deletedCelebration) throw new HttpError(404, 'No Record Found');
  return deletedCelebration;
};

const updateReaction = async (celebrationId, memberId, isReacted, projectId) => {

  const celebration = await dashboardPrisma.Celebration.findFirst({
    where: {
      celebrationId,
      projectId
    },
    select: {
      reaction: {
        where: {
          memberId
        },
        select: {
          memberId: true,
          isRemoved: true
        }
      }
    }
  });

  if (celebration.reaction > 0 && celebration.reaction[0].memberId !== memberId) throw new HttpError(403, 'You are not authorized to perform this action');

  if (celebration.reaction?.length === 0) {
    await dashboardPrisma.celebrationReactedUser.create({
      data: {
        celebrationId,
        memberId
      },
      ...selectOnlyValidReactionFields
    });
    return { 'count': 1 };
  }
  const updatedReaction =
    await dashboardPrisma.celebrationReactedUser.updateMany({
      where: {
        celebrationId,
        memberId
      },
      data: {
        isRemoved: !isReacted
      }
    });
  return updatedReaction;
};

const getReaction = async (celebrationId, memberId, projectId) => {
  const reaction = await dashboardPrisma.celebration.findMany({
    where: {
      celebrationId,
      memberId,
      projectId,
    },
    select: {
      reaction: {
        where: {
          isRemoved: false
        },
        select: {
          memberId: true,
        }
      },
    }
  });
  return reaction;
};

const getCelebrationsByDate = async (projectId, memberId, date) => {
  const celebrations = await dashboardPrisma.Celebration.findMany({
    where: {
      projectId,
      createdAt: {
        gte: new Date(date),
        lte: new Date(
          new Date(date).setDate(new Date(date).getDate() + 1)
        ),
      }
    },
    ...selectOnlyValidCelebrationBoardFields(false)
  }
  );
  return filterByAnonymous(celebrations, memberId);
};

module.exports = {
  listCelebrations,
  getCelebrationById,
  createCelebration,
  updateCelebrationById,
  deleteCelebrationById,
  updateReaction,
  getReaction,
  getCelebrationsByDate
};