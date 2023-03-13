const { HttpError } = require('../../errors');
const { dashboardPrisma } = require('../prismaClient');

const selectOnlyValidReactionFields = {
  select: {
    reactionId: true,
    celebrationId: true
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
        userId: true,
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
    createdAt: true
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
const listCelebrations = async () => {
  const celebrations = await dashboardPrisma.Celebration.findMany({
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
const createCelebration = async (author, content, type, isAnonymous = false) => {
  const newCelebration = await dashboardPrisma.Celebration.create({
    data: {
      author,
      isAnonymous,
      content,
      type,
    },
    ...selectOnlyValidCelebrationBoardFields
  }
  );
  return newCelebration;
};

// update a celebration
const updateCelebrationById = async (celebrationId, content, type, isAnonymous) => {
  console.log(celebrationId, content, type, isAnonymous);
  const updatedCelebration = await dashboardPrisma.Celebration.update({
    where: {
      celebrationId
    },
    data: {
      content,
      type,
      isAnonymous,
    },
    ...selectOnlyValidCelebrationBoardFields
  }
  );
  if (!updatedCelebration) throw new HttpError(404, 'No Record Found');
  return updatedCelebration;
};

// delete a celebration
const deleteCelebrationById = async (celebrationId) => {
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

const updateReaction = async (celebrationId, userId, isReacted) => {
  const updatedReaction = isReacted ?
    await dashboardPrisma.celebrationReactedUser.create({
      data: {
        celebrationId,
        userId
      },
      ...selectOnlyValidReactionFields
    }) :
    await dashboardPrisma.celebrationReactedUser.deleteMany({
      where: {
        celebrationId,
        userId
      },
    });
  if (!isReacted & updatedReaction.count === 0) throw new HttpError(404, 'No Reaction Found');
  return updatedReaction;
};

const getReaction = async (celebrationId, userId) => {
  const reaction = await dashboardPrisma.celebrationReactedUser.findMany({
    where: {
      celebrationId,
      userId
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