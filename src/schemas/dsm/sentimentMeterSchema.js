const joi = require('joi');
const createSentiment = joi.object({
  sentiment: joi.valid('OK', 'GOOD', 'BAD', 'HAPPY', 'NULL'),
});

const dateSchema = joi.object({
  projectId: joi.number().integer().min(1),
  createdAt: joi.date().iso(),
});

const getByIdSchema = joi.object({
  id: joi.number().integer().min(1),
});

const patchSentiment = joi.object({
  id: joi.number().integer().min(1),
  sentiment: joi.valid('OK', 'GOOD', 'BAD', 'HAPPY', 'NULL'),
});

module.exports = { createSentiment, dateSchema, getByIdSchema, patchSentiment };
