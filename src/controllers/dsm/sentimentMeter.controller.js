const sentimentMeterService = require('../../services/dsm/sentimentMeter.services');
const userAnonmyous = 'anonymous';

const createSentiment = async (req, res, next) => {
  try {
    const { sentiment } = req.body;
    const projectId = parseInt(req.params.projectId);
    const memberId = parseInt(req.user.memberId);
    const author = userAnonmyous;
    const newSentiment = await sentimentMeterService.createSentiment(
      author,
      sentiment,
      projectId,
      memberId
    );
    res.status(201).json(newSentiment);
  } catch (err) {
    next(err);
  }
};

const detailSentiment = async (req, res, next) => {
  try {
    const sentimentId = parseInt(req.params.id);
    const sentiment = await sentimentMeterService.getSentimentById(
      sentimentId
    );
    res.status(200).json(sentiment);
  } catch (err) {
    next(err);
  }
};

const updateSentiment = async (req, res, next) => {
  try {
    const sentimentId = parseInt(req.params.id);
    const memberId = parseInt(req.user.memberId);
    const { sentiment } = req.body;
    const updatedSentiment = await sentimentMeterService.updateSentimentById(
      sentimentId,
      sentiment,
      memberId
    );
    res.status(200).json(updatedSentiment);
  } catch (err) {
    next(err);
  }
};

const countSentimentByDate = async (req, res, next) => {
  try {
    const { createdAt, projectId } = req.params;
    const countSentiment = await sentimentMeterService.countSentimentByDate(
      createdAt,
      parseInt(projectId)
    );
    res.status(200).json(countSentiment);
  } catch (err) {
    next(err);
  }
};
const getAllSentiment = async (req, res, next) => {
  try {
    const projectId = parseInt(req.params.projectId);
    const allSentiment = await sentimentMeterService.getAllSentiment(projectId);
    res.status(200).json(allSentiment);
  } catch (err) {
    next(err);
  }
};

const deleteSentimentById = async (req, res, next) => {
  try {
    const sentimentId = parseInt(req.params.id);
    const memberId = parseInt(req.user.memberId);
    await sentimentMeterService.deleteSentimentById(
      sentimentId,
      memberId
    );
    res.status(200).json({ message: 'Sentiment deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createSentiment,
  detailSentiment,
  updateSentiment,
  countSentimentByDate,
  getAllSentiment,
  deleteSentimentById
};
