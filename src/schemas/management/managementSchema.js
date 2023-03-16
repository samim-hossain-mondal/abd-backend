const joi = require('joi');

const projectInfoSchema = joi.object({
  projectId: joi
    .number()
    .integer()
    .min(1),
  projectName: joi
    .string()
    .min(1)
    .max(50),
  projectDescription: joi
    .string()
    .min(1)
    .max(250),
});

const createProjectSchema = projectInfoSchema.fork([
  'projectId', 'projectName', 'projectDescription'
], (field) => field.required());

const addMemberSchema = joi.object({
  email: joi
    .string()
    .email()
    .required(),
  role: joi
    .string()
    .valid('ADMIN', 'LEADER', 'MEMBER')
    .required()
});

module.exports = {
  createProjectSchema,
  addMemberSchema,
  projectInfoSchema
};

