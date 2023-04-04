const joi = require('joi');
const getNotificationsParamSchema = joi.object({
  projectId: joi
    .number()
    .integer()
    .required(),
  memberId: joi
    .number()
    .integer()
    .required()
});
const editNotificationsParamSchema = joi.object({
  userNotificationId: joi
    .number()
    .integer()
    .required()
});
const editNotificationsBodySchema = joi.object({
  readStatus: joi
    .boolean()
    .required(),
  memberId: joi
    .number()
    .integer(),
  notificationId: joi
    .number()
    .integer()
});
module.exports = {
  getNotificationsParamSchema,
  editNotificationsParamSchema,
  editNotificationsBodySchema
};