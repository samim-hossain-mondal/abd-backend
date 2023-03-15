const router = require('express').Router();
const { createNewProject } = require('../../../controllers/management/management.controller');
const { generateValidationMiddleware } = require('../../../middlewares/validation');
const { createProjectSchema } = require('../../../schemas/management/managementSchema');

router.route('/project')
  // .get(listAllProjectsByMemberEmail)
  .post(
    generateValidationMiddleware(createProjectSchema), 
    createNewProject
  );
  

// router.route('/project/members')
// .post(addProjectMembers)

module.exports = router;