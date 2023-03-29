const joi = require('joi');
const createTeamInformationSchema = joi.object({
  name: joi
    .string()
    .required(),
  memberId: joi
    .number()
    .integer(),
  projectId: joi
    .number()
    .integer()
    .required(),
  projectRole: joi
    .string(),
  message: joi
    .string()
    .required(),
  bio: joi
    .string(),
  startDate: joi
    .date()
    .required(),
  endDate: joi
    .date()
    .required()
});
const updateTeamInformationSchema = joi.object({
  memberId: joi
    .number()
    .integer(),
  name: joi
    .string()
    .required(),
  projectId: joi
    .number()
    .integer()
    .required(),
  projectRole: joi
    .string(),
  message: joi
    .string(),
  bio: joi
    .string(),
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
    .number()
    .integer()
    .required()
});
module.exports = {
  createTeamInformationSchema,
  updateTeamInformationSchema,
  deleteTeamInformationParamSchema,
  updateTeamInformationParamSchema,
  getTeamInformationsByProjectIdParamSchema
};