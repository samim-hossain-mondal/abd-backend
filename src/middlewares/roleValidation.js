const { managementPrisma } = require('../prismaClient');
const { convertToRoleEnum } = require('../utils/managementDbUtils');

const roleValidationMiddleware = async (req, res, next) => {
  const { email } = req.user;
  const { projectId } = req.params;

  const isAdmin = await managementPrisma.projectMember.findUnique({
    where: {
      projectId_email: {
        projectId: parseInt(projectId),
        email,
      },
    },
    select: {
      memberId: true,
      role: true,
    },
  });

  if (isAdmin && isAdmin.role === convertToRoleEnum('ADMIN')) {
    const memberInfo = {
      role: isAdmin.role,
      memberId: isAdmin.memberId,
    };
    req.user = { ...req.user, ...memberInfo };
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
  } else {
    const memberInfo = {
      role: member.role,
      memberId: member.memberId,
      projectId: member.projectId,
      isPO: member && member.role === convertToRoleEnum('ADMIN'),
    };

    req.user = { ...req.user, ...memberInfo };

    next();
  }
};

const userValidationMiddleware = async (req, res, next) => {
  const { memberId: memberIdParam } = req.params;
  const { memberId: memberIdUser } = req.user;

  if (memberIdParam !== memberIdUser) {
    res.status(403).json({ message: 'You are not authorized to access this service.' });
  } else {
    next();
  }
};

module.exports = {
  roleValidationMiddleware,
  memberValidationMiddleware,
  userValidationMiddleware,
};