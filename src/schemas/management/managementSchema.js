const joi = require('joi');

const projectInfoSchema = joi.object({
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
  'projectName', 'projectDescription'
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

