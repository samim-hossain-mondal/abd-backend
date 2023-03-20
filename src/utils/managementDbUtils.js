const { HttpError } = require('../errors');
const { Role } = require('../generated/management-db');

const convertToRoleEnum = (role) => {
  switch (role) {
  case 'ADMIN':
    return Role.ADMIN;
  case 'LEADER':
    return Role.LEADER;
  case 'MEMBER':
    return Role.MEMBER;
  default:
    throw new HttpError(400, 'Invalid role.');
  }
};

module.exports = {
  convertToRoleEnum
};