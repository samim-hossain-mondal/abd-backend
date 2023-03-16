const joi = require('joi');

const createAnnouncementSchema = joi.object({
  content: joi
    .string()
    .min(1)
    .max(1500)
    .required(),
  projectId: joi
    .number()
    .integer()
    .required()
    .min(1)
});

const announcementsParamSchema = joi.object({
  id: joi
    .number()
    .integer()
    .min(1)
});

const patchAnnouncementSchema = joi.object({
  content: joi
    .string()
    .min(1)
    .max(1500)
    .required()
});

module.exports = {
  createAnnouncementSchema,
  announcementsParamSchema,
  patchAnnouncementSchema
};