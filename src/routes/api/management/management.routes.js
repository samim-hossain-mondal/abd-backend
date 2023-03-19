const router = require('express').Router();
const { 
  createNewProject, 
  listAllProjectsByCurrentUserEmail, 
  listAllMembersByProjectId,
  addNewProjectMember,
  removeMemberFromProject,
  updateMemberRole,
  updateProjectInfo,
  deleteProject,
  getProjectDetailsById,
  createNewMember,
  getMemberDetailsById,
  updateMemberInfo,
  deleteMember,
  currentUserDetails,
  getProjectMemberDetailsById
} = require('../../../controllers/management/management.controller');
const { generateValidationMiddleware } = require('../../../middlewares/validation');
const { roleValidationMiddleware, memberValidationMiddleware } = require('../../../middlewares/roleValidation');
const { createProjectSchema, addMemberSchema, projectInfoSchema } = require('../../../schemas/management/managementSchema');

router.route('/project')
  .get(listAllProjectsByCurrentUserEmail)
  .post(
    generateValidationMiddleware(createProjectSchema), 
    createNewProject
  );

router.route('/project/:projectId')
  .get(memberValidationMiddleware, getProjectDetailsById)
  .patch(
    generateValidationMiddleware(projectInfoSchema),
    roleValidationMiddleware, 
    updateProjectInfo)
  .delete(roleValidationMiddleware, deleteProject);

router.route('/project/:projectId/member')
  .get(
    memberValidationMiddleware, 
    listAllMembersByProjectId
  )
  .post(
    generateValidationMiddleware(addMemberSchema),
    roleValidationMiddleware,
    addNewProjectMember
  )
  .patch(
    generateValidationMiddleware(addMemberSchema),
    roleValidationMiddleware,
    updateMemberRole
  )
  .delete(
    roleValidationMiddleware,
    removeMemberFromProject
  );

router.route('/project/:projectId/member/:memberId')
  .get(memberValidationMiddleware, getProjectMemberDetailsById);

router.route('/me')
  .get(currentUserDetails);

// TODO: these routes are not to be used, parked for future enhancement
router.route('/member')
  .post(createNewMember);

router.route('/member/:memberId')
  .get(getMemberDetailsById)
  .patch(updateMemberInfo)
  .delete(deleteMember);

module.exports = router;