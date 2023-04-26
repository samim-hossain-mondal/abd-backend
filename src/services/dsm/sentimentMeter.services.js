const { HttpError } = require('../../errors');
const { dashboardPrisma } = require('../../prismaClient');
const getTodayDate = require('../../utils/getTodayDate');

const selectOnlyValidSentimentMeterFields = {
  select: {
    sentimentId: true,
    sentiment: true,
    createdAt: true,
    projectId: true,
    memberId: true,
  },
};

const checkIfTodaySentiment = (sentimentDate, offSetTime = 0) => {
  const todayDateClient = getTodayDate(offSetTime * -1);

  const todayDate = new Date(new Date(todayDateClient).getTime() + offSetTime);
  const nextDate = new Date(todayDate);
  nextDate.setDate(nextDate.getDate() + 1);

  return new Date(sentimentDate) < nextDate && new Date(sentimentDate) >= todayDate;
};

const getThisWeekFirstAndLastDay = (createdAt, offSetTime = 0) => {

  const currDate = new Date(new Date(createdAt).getTime() + offSetTime);

  // exclude Sunday & Saturday
  const firstDate = (currDate.getDate() - currDate.getDay()) + 1;
  const lastDate = firstDate + 4;

  const firstDay = new Date(currDate.setDate(firstDate));
  const lastDay = new Date(currDate.setDate(lastDate));
  const todayDate = getTodayDate();

  const dayDifference = new Date(todayDate).getDate() - firstDay.getDate();

  return {
    firstDay,
    lastDay,
    dayDifference: dayDifference < 0 ? 0 : dayDifference
  };
};

const getSentimentById = async (sentimentId, projectId) => {
  const sentiment = await dashboardPrisma.sentimentMeter.findFirst({
    where: {
      sentimentId,
      projectId
    },
    ...selectOnlyValidSentimentMeterFields,
  });
  if (!sentiment) {
    throw new HttpError(404, `Sentiment with id ${sentimentId} not found`);
  }
  return sentiment;
};

const getTodaySentimentOfMember = async (projectId, memberId, offSetTime = 0) => {
  const todayDateClient = getTodayDate(offSetTime * -1);
  const todayDate = new Date(new Date(todayDateClient).getTime() + offSetTime);

  const nextDate = new Date(todayDate);
  nextDate.setDate(nextDate.getDate() + 1);

  const sentiment = await dashboardPrisma.sentimentMeter.findFirst({
    where: {
      projectId,
      memberId,
      createdAt: {
        gte: todayDate,
        lt: nextDate,
      }
    },
    ...selectOnlyValidSentimentMeterFields,
  });
  if (!sentiment) {
    return {};
  }
  return sentiment;
};

const updateSentimentById = async (sentimentId, sentiment, memberId, projectId, offSetTime) => {
  const sentimentExists = await dashboardPrisma.sentimentMeter.findFirst({
    where: {
      sentimentId,
      projectId
    },
    select: {
      memberId: true,
      createdAt: true
    },
  });

  if (!sentimentExists) throw new HttpError(404, 'No Record Found');
  if (sentimentExists.memberId !== memberId) throw new HttpError(403, 'You are not authorized to update this record');
  if (!checkIfTodaySentiment(sentimentExists.createdAt, offSetTime)) throw new HttpError(400, 'Sorry, Can\'t update past sentiment record');

  const updatedSentiment = await dashboardPrisma.sentimentMeter.update({
    where: {
      sentimentId,
    },
    data: {
      sentiment,
    },
    ...selectOnlyValidSentimentMeterFields,
  });

  if (updatedSentiment.count === 0) throw new HttpError(404, 'No Record Found');
  return updatedSentiment;
};

const getSentimentCountByThisWeek = async (createdAt, projectId, offSetTime = 0) => {
  const { firstDay, lastDay, dayDifference } = getThisWeekFirstAndLastDay(createdAt, offSetTime);
  lastDay.setDate(lastDay.getDate() + 1);

  const thisWeekSentiments = await dashboardPrisma.sentimentMeter.groupBy({
    by: ['sentiment'],
    where: {
      projectId,
      createdAt: {
        gte: firstDay,
        lt: lastDay
      },
      NOT: {
        sentiment: 'NULL'
      },
    },
    _count: {
      sentiment: true,
    }
  });

  const fullCount = thisWeekSentiments.reduce((count, curr) => {
    count += curr._count.sentiment;
    return count;
  }, 0);

  thisWeekSentiments.forEach((element) => {
    element.count = element._count.sentiment;
    delete element._count;
  });

  return { thisWeekData: thisWeekSentiments, thisWeekFullCount: fullCount, dayDifference: dayDifference > 0 ? dayDifference : 0, firstDay, lastDay };
};

const countSentimentByDate = async (createdAt, projectId, offSetTime) => {

  // along get this week stats
  const { thisWeekData, thisWeekFullCount, dayDifference, firstDay, lastDay } = await getSentimentCountByThisWeek(createdAt, projectId, offSetTime);

  let countSentiment = [], fullCount = 0;

  const todayDateClient = getTodayDate(offSetTime * -1);
  const todayDate = new Date(new Date(todayDateClient).getTime() + offSetTime);

  const nextDate = new Date(todayDate);
  nextDate.setDate(nextDate.getDate() + 1);

  if (todayDate.getDay() !== 0 && todayDate.getDay() !== 6) {
    countSentiment = await dashboardPrisma.sentimentMeter.groupBy({
      by: ['sentiment'],
      where: {
        projectId,
        createdAt: {
          gte: todayDate,
          lte: nextDate,
        },
      },
      _count: {
        sentiment: true,
      },
    });

    fullCount = countSentiment.reduce((acc, curr) => {
      acc += curr._count.sentiment;
      return acc;
    }, 0);

    countSentiment.forEach((element) => {
      element.count = element._count.sentiment;
      delete element._count;
    });
  }

  return {
    today: {
      data: countSentiment,
      fullCount: fullCount,
      todayDate
    },
    thisWeek: {
      data: thisWeekData,
      fullCount: thisWeekFullCount,
      dayDifference,
      firstDay,
      lastDay
    }
  };
};

const getAllSentiment = async (projectId) => {
  const allSentiment = await dashboardPrisma.sentimentMeter.findMany({
    where: {
      projectId,
    },
    ...selectOnlyValidSentimentMeterFields,
  });
  return allSentiment;
};

const deleteSentimentById = async (sentimentId, memberId, projectId, offSetTime) => {
  const sentimentExists = await dashboardPrisma.sentimentMeter.findFirst({
    where: {
      sentimentId,
      projectId
    },
    select: {
      memberId: true,
      createdAt: true
    },
  });

  if (!sentimentExists) throw new HttpError(404, 'No Record Found');
  if (sentimentExists.memberId !== memberId) throw new HttpError(403, 'You are not authorized to delete this record');
  if (!checkIfTodaySentiment(sentimentExists.createdAt, offSetTime)) throw new HttpError(400, 'Sorry, Can\'t delete past sentiment record');

  const deletedSentiment = await dashboardPrisma.sentimentMeter.delete({
    where: {
      sentimentId,
    },
  });
  if (deletedSentiment.count === 0) throw new HttpError(404, 'No Record Found');
};

const createSentiment = async (sentiment, projectId, memberId, offSetTime = 0) => {

  const todayDateClient = getTodayDate(offSetTime * -1);
  const todayDate = new Date(new Date(todayDateClient).getTime() + offSetTime);

  // const todayDate = new Date();
  if (todayDate.getDay() === 0 || todayDate.getDay() === 6) throw new HttpError(400, 'Sorry, Can\'t track response on weekends');

  const sentimentExists = await getTodaySentimentOfMember(projectId, memberId, offSetTime);
  if (sentimentExists.sentimentId) {
    const updatedSentiment = sentimentExists.sentiment === sentiment ?
      sentimentExists :
      await updateSentimentById(sentimentExists.sentimentId, sentiment, memberId, projectId);
    return updatedSentiment;
  }

  const newSentiment = await dashboardPrisma.sentimentMeter.create({
    data: {
      sentiment,
      projectId,
      memberId,
    },
    ...selectOnlyValidSentimentMeterFields,
  });
  return newSentiment;
};


module.exports = {
  createSentiment,
  getSentimentById,
  updateSentimentById,
  countSentimentByDate,
  getAllSentiment,
  deleteSentimentById,
  getTodaySentimentOfMember
};