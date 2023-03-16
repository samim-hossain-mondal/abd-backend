const { managementPrisma } = require('../prismaClient');
const { convertToRoleEnum } = require('../utils/managementDbUtils');

const roleValidationMiddleware = async (req, res, next) => {
  // TODO:
  const { email } = req.user;
  // const email = 'cricket@email.com'; // dummy
  const { projectId } = req.params;
  
  const isAdmin = await managementPrisma.projectMember.findUnique({
    where: {
      projectId_email: {
        projectId: parseInt(projectId),
        email,
      },
    },
    select: {
      role: true,
    },
  });

  if (isAdmin.role === convertToRoleEnum('ADMIN')) {
    next();
  }
  else {
    res.status(403).json({ message: 'You cannot access these services.' });
  }
};

const memberValidationMiddleware = async (req, res, next) => {
  const { email } = req.user;
  const { projectId } = req.params;
  
  
  const member = await managementPrisma.projectMember.findUnique({
    where: {
      projectId_email: {
        projectId: parseInt(projectId),
        email,
      },
    },
  });

  if (!member) {
    res.status(403).json({ message: 'You are not authorized to access this project.' });
  }

  next();
};

module.exports = { 
  roleValidationMiddleware,
  memberValidationMiddleware,
};