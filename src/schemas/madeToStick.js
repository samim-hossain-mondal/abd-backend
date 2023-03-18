const joi = require('joi');
const madeToStickCreateSchema = joi.object({
  value: joi
    .string()
    .required(),
  x: joi
    .number()
    .integer()
    .required(),
  y: joi
    .number()
    .integer()
    .required(),
  w: joi
    .number()
    .integer()
    .required(),
  h: joi
    .number()
    .integer()
    .required(),
  type: joi
    .string()
    .valid('TEXT', 'IMAGE')
    .required(),
  emailId: joi
    .string()
    .required(),
  backgroundColor: joi
    .string()
    .required(),
});
const madeToStickEditSchema = joi.object({
  i: joi
    .string(),
  value: joi
    .string()
    .required(),
  x: joi
    .number()
    .integer()
    .required(),
  y: joi
    .number()
    .integer()
    .required(),
  w: joi
    .number()
    .integer()
    .required(),
  h: joi
    .number()
    .integer()
    .required(),
  type: joi
    .string()
    .valid('TEXT', 'IMAGE')
    .required(),
  emailId: joi
    .string()
    .required(),
  backgroundColor: joi
    .string()
    .required(),
});
const madeToStickDeleteParamSchema = joi.object({
  i: joi
    .string()
    .required(),
});
const madeToStickEditParamSchema = joi.object({
  i: joi
    .string()
    .required(),
});
module.exports = {
  madeToStickCreateSchema,
  madeToStickEditSchema,
  madeToStickDeleteParamSchema,
  madeToStickEditParamSchema
};