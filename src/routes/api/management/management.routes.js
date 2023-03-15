const router = require('express').Router();
const { 
  createNewProject, 
  listAllProjectsByMemberEmail, 
  listAllMembersByProjectId,
  addNewProjectMember,
  removeMemberFromProject,
  updateMemberRole,
  updateProjectInfo,
  deleteProject
} = require('../../../controllers/management/management.controller');
const { generateValidationMiddleware } = require('../../../middlewares/validation');
const { createProjectSchema, addMemberSchema } = require('../../../schemas/management/managementSchema');

router.route('/project')
  .get(listAllProjectsByMemberEmail)
  .post(
    generateValidationMiddleware(createProjectSchema), 
    createNewProject
  );

router.route('/project/member/:projectId')
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

router.route('/project/:projectId')
  .patch(updateProjectInfo)
  .delete(deleteProject);

module.exports = router;