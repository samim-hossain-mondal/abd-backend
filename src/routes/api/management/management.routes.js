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
  deleteMember
} = require('../../../controllers/management/management.controller');
const { generateValidationMiddleware } = require('../../../middlewares/validation');
const { roleValidationMiddleware } = require('../../../middlewares/roleValidation');
const { createProjectSchema, addMemberSchema, projectInfoSchema } = require('../../../schemas/management/managementSchema');

router.route('/project')
  .get(listAllProjectsByCurrentUserEmail)
  .post(
    generateValidationMiddleware(createProjectSchema), 
    createNewProject
  );

router.route('/project/:projectId')
  .get(roleValidationMiddleware, getProjectDetailsById)
  .patch(
    generateValidationMiddleware(projectInfoSchema),
    roleValidationMiddleware, 
    updateProjectInfo)
  .delete(roleValidationMiddleware, deleteProject);

router.route('/member')
  .post(createNewMember);

router.route('/member/:memberId')
  .get(getMemberDetailsById)
  .patch(updateMemberInfo)
  .delete(deleteMember);
  

router.route('/project/:projectId/member')
  .get(listAllMembersByProjectId)
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

module.exports = router;