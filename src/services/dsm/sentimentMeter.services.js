const { HttpError } = require('../../errors');
const { dashboardPrisma } = require('../../prismaClient');

const selectOnlyValidSentimentMeterFields = {
  select: {
    sentimentId: true,
    author: true,
    sentiment: true,
    createdAt: true,
    projectId: true,
    memberId: true,
  },
};

const createSentiment = async (author, sentiment, projectId, memberId) => {
  const newSentiment = await dashboardPrisma.sentimentMeter.create({
    data: {
      author,
      sentiment,
      projectId,
      memberId,
    },
    ...selectOnlyValidSentimentMeterFields,
  });
  return newSentiment;
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

const updateSentimentById = async (sentimentId, sentiment, memberId, projectId) => {
  // check if sentiment exists and belongs to memeber
  const sentimentExists = await dashboardPrisma.sentimentMeter.findFirst({
    where: {
      sentimentId,
      projectId
    },
    select: {
      memberId: true,
    },
  });

  if (!sentimentExists) throw new HttpError(404, 'No Record Found');
  if (sentimentExists.memberId !== memberId) throw new HttpError(403, 'You are not authorized to update this record');

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

const countSentimentByDate = async (createdAt, projectId) => {
  const countSentiment = await dashboardPrisma.sentimentMeter.groupBy({
    by: ['sentiment'],
    where: {
      projectId,
      createdAt: {
        gte: new Date(createdAt),
        lte: new Date(
          new Date(createdAt).setDate(new Date(createdAt).getDate() + 1)
        ),
      },
    },
    _count: {
      sentiment: true,
    },
  });

  if (countSentiment.length === 0)
    throw new HttpError(404, 'No Data found for the date' + createdAt);

  const fullCount = countSentiment.reduce((acc, curr) => {
    acc += curr._count.sentiment;
    return acc;
  }, 0);

  countSentiment.forEach((element) => {
    element.percentage = (element._count.sentiment / fullCount) * 100;
    delete element._count;
  });
  return countSentiment;
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

const deleteSentimentById = async (sentimentId, memberId, projectId) => {
  const sentimentExists = await dashboardPrisma.sentimentMeter.findUnique({
    where: {
      sentimentId,
      projectId
    },
    select: {
      memberId: true,
    },
  });

  if (!sentimentExists) throw new HttpError(404, 'No Record Found');
  if (sentimentExists.memberId !== memberId) throw new HttpError(403, 'You are not authorized to delete this record');

  const deletedSentiment = await dashboardPrisma.sentimentMeter.delete({
    where: {
      sentimentId,
    },
  });
  if (deletedSentiment.count === 0) throw new HttpError(404, 'No Record Found');
};

module.exports = {
  createSentiment,
  getSentimentById,
  updateSentimentById,
  countSentimentByDate,
  getAllSentiment,
  deleteSentimentById
};