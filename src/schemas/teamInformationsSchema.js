const joi = require('joi');
const createTeamInformationSchema = joi.object({
  name: joi
    .string()
    .required(),
  emailId: joi
    .string()
    .email()
    .required(),
  projectId: joi
    .string()
    .required(),
  role: joi
    .string()
    .required(),
  message: joi
    .string()
    .required(),
  bio: joi
    .string()
    .required(),
  startDate: joi
    .date()
    .required(),
  endDate: joi
    .date()
    .required()
});
const updateTeamInformationSchema = joi.object({
  name: joi
    .string()
    .required(),
  emailId: joi
    .string()
    .email()
    .required(),
  projectId: joi
    .string()
    .required(),
  role: joi
    .string()
    .required(),
  message: joi
    .string()
    .required(),
  bio: joi
    .string()
    .required(),
  startDate: joi
    .date()
    .required(),
  endDate: joi
    .date()
    .required()
});
const deleteTeamInformationParamSchema = joi.object({
  id: joi
    .number()
    .required()
});
const updateTeamInformationParamSchema = joi.object({
  id:joi
    .number()
    .required()
});
const getTeamInformationsByProjectIdParamSchema = joi.object({
  projectId: joi
    .string()
    .required()
});
module.exports = {
  createTeamInformationSchema,
  updateTeamInformationSchema,
  deleteTeamInformationParamSchema,
  updateTeamInformationParamSchema,
  getTeamInformationsByProjectIdParamSchema
};
