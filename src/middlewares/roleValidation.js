const { managementPrisma } = require('../prismaClient');
const { convertToRoleEnum } = require('../utils/managementDbUtils');

const roleValidationMiddleware = async (req, res, next) => {
  // TODO:
  // const { email } = req.user;
  const email = 'cricket@email.com'; // dummy
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

module.exports = { 
  roleValidationMiddleware 
};