const joi = require('joi');

const createProjectSchema = joi.object({
  projectId: joi
    .number()
    .integer()
    .required()
    .min(1),
  projectName: joi
    .string()
    .min(1)
    .max(50)
    .required(),
  projectDescription: joi
    .string()
    .min(1)
    .max(250),
});

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
  addMemberSchema
};

