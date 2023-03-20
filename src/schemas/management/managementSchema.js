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

const updateMemberSchema = joi.object({
  email: joi
    .string()
    .email(),
  role: joi
    .string()
    .valid('ADMIN', 'LEADER', 'MEMBER')
    .required()
});

const addMemberSchema = updateMemberSchema.fork('email', (field) => field.required());

const removeMemberSchema = joi.object({
  email: joi
    .string()
    .email()
    .required()
});

module.exports = {
  createProjectSchema,
  addMemberSchema,
  updateMemberSchema,
  projectInfoSchema,
  removeMemberSchema
};

