const joi = require('joi');

const leaveSchema = joi.object({
  startDate: joi
    .date()
    .iso()
    .required(),
  endDate: joi
    .date()
    .iso()
    .required(),
  event: joi
    .string()
    .required(),
  isRisk: joi
    .boolean()
    .required(),
});

module.exports = {
  leaveSchema
};
