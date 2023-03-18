const { HttpError } = require('../../errors');
const { dashboardPrisma } = require('../../prismaClient');

const selectOnlyValidReactionFields = {
  select: {
    reactionId: true,
    celebrationId: true,
    memberId: true
  }
};

const selectOnlyValidCelebrationBoardFields = {
  select: {
    celebrationId: true,
    isAnonymous: true,
    author: true,
    content: true,
    type: true,
    _count: {
      select: { reaction: true },
    },
    reaction: {
      take: 3,
      select: {
        memberId: true,
      }
    },
    // reaction: {
    //   where: {
    //     userId: userId
    //   },
    //   select: {
    //     reactionId: true
    //   }
    // },
    createdAt: true,
    projectId: true,
    memberId: true,
  }
};

const filterByAnonymous = (celebrations) => {
  return celebrations.map((celebration) => {
    if (celebration.isAnonymous) {
      return { ...celebration, author: undefined };
    }
    return celebration;
  });
};

// get list of all celebrations
const listCelebrations = async (projectId) => {
  const celebrations = await dashboardPrisma.Celebration.findMany({
    where: {
      projectId
    },
    orderBy: {
      createdAt: 'desc',
    },
    ...selectOnlyValidCelebrationBoardFields
  }
  );
  return filterByAnonymous(celebrations);
};

// get a celebration by id
const getCelebrationById = async (celebrationId) => {
  const celebration = await dashboardPrisma.Celebration.findUnique({
    where: {
      celebrationId
    },
    ...selectOnlyValidCelebrationBoardFields
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
    ...selectOnlyValidCelebrationBoardFields
  }
  );
  return newCelebration;
};

// update a celebration
const updateCelebrationById = async (celebrationId, content, type, isAnonymous, memberId) => {

  const celebration = await dashboardPrisma.Celebration.findUnique({
    where: {
      celebrationId
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
    ...selectOnlyValidCelebrationBoardFields
  });
  
  return updatedCelebration;
};

// delete a celebration
const deleteCelebrationById = async (celebrationId, memberId) => {

  const celebration = await dashboardPrisma.Celebration.findUnique({
    where: {
      celebrationId
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
    ...selectOnlyValidCelebrationBoardFields
  }
  );
  if (!deletedCelebration) throw new HttpError(404, 'No Record Found');
  return deletedCelebration;
};

const updateReaction = async (celebrationId, memberId, isReacted) => {

  const celebration = await dashboardPrisma.Celebration.findUnique({
    where: {
      celebrationId
    },
    select: {
      memberId: true
    }
  });

  if (!celebration) throw new HttpError(404, 'No Record Found');
  if (celebration.memberId === memberId) throw new HttpError(403, 'You are not authorized to perform this action');

  const updatedReaction = isReacted ?
    await dashboardPrisma.celebrationReactedUser.create({
      data: {
        celebrationId,
        memberId
      },
      ...selectOnlyValidReactionFields
    }) :
    await dashboardPrisma.celebrationReactedUser.deleteMany({
      where: {
        celebrationId,
        memberId
      },
    });
  if (!isReacted & updatedReaction.count === 0) throw new HttpError(404, 'No Reaction Found');
  return updatedReaction;
};

const getReaction = async (celebrationId, memberId) => {
  const reaction = await dashboardPrisma.celebrationReactedUser.findMany({
    where: {
      celebrationId,
      memberId
    },
    ...selectOnlyValidReactionFields
  });
  return reaction;
};


module.exports = {
  listCelebrations,
  getCelebrationById,
  createCelebration,
  updateCelebrationById,
  deleteCelebrationById,
  updateReaction,
  getReaction
};