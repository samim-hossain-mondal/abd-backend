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
const { createProjectSchema, addMemberSchema } = require('../../../schemas/management/managementSchema');

router.route('/project')
  .get(listAllProjectsByCurrentUserEmail)
  .post(
    generateValidationMiddleware(createProjectSchema), 
    createNewProject
  );

router.route('/project/:projectId')
  .get(getProjectDetailsById)
  .patch(updateProjectInfo)
  .delete(deleteProject);

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
    addNewProjectMember
  )
  .patch(
    generateValidationMiddleware(addMemberSchema),
    updateMemberRole
  )
  .delete(removeMemberFromProject);

module.exports = router;