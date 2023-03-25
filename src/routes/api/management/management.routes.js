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
} = require('../../../controllers/management.controller.js');

const { generateValidationMiddleware } = require('../../../middlewares/validation');
const { roleValidationMiddleware, memberValidationMiddleware } = require('../../../middlewares/roleValidation');
const {
  createProjectSchema,
  addMemberSchema,
  projectInfoSchema,
  updateMemberSchema,
  removeMemberSchema
} = require('../../../schemas/managementSchema');
const { paramParser } = require('../../../middlewares/paramParser');

/**
 * @openapi
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       required:
 *         - projectId
 *         - projectName
 *         - isDeleted
 *       properties:
 *         projectId:
 *           type: integer   
 *           description: Unique identifier of the project
 *         projectName:
 *           type: string
 *           description: Name of the project
 *         projectDescription:
 *           type: string
 *           description: Description of the project
 *         isDeleted:
 *           type: boolean
 *           description: Is project deleted 
 *     Member:
 *       type: object
 *       required:
 *         - email
 *         - memberId
 *         - isDeleted
 *       properties:
 *         email:
 *           type: string   
 *           description: Email of the member
 *         name:
 *           type: string
 *           description: Name of the member
 *         role:
 *           type: string
 *           description: Role of the member
 *         memberId:
 *           type: integer
 *           description: Unique identifier of the member
 *         isDeleted:
 *           type: boolean
 *           description: Is member deleted
 *     ProjectMember:
 *       type: object
 *       required:
 *         - projectId
 *         - email
 *         - role
 *         - memberId
 *       properties:
 *         projectId:
 *           type: integer
 *           description: Unique identifier of the project
 *         email:
 *           type: string   
 *           description: Email of the member
 *         role:
 *           type: string
 *           description: Role of the member in the project
 *         memberId:
 *           type: integer
 *           description: Unique identifier of the member
 *     
 */

/**
 * @openapi
 * /api/management/project:
 *   get:
 *     tags:
 *       - management
 *     summary: List all projects associated with the currently authenticated user
 *     description: Returns a list of all projects associated with the currently authenticated user's email address
 *     responses:
 *       '200':
 *         description: A list of projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Project not found
 *       '403':
 *          description: Forbidden
 *       '500':
 *          description: Internal server error
 *   post:
 *     tags:
 *       - management
 *     summary: Create a new project
 *     description: Create a new project
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
  *           schema:
 *             type: object
 *             properties:
 *               projectName:
 *                 type: string
 *                 description: Name of the project
 *               projectDescription:
 *                 type: string
 *                 description: Description of the project (optional)
 *             required:
 *               - projectName
 *     responses:
 *       '200':
 *         description: Project created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Project not found
 *       '400':
 *          description: Bad request
 *       '500':
 *          description: Internal server error
 */

router.route('/project')
  .get(listAllProjectsByCurrentUserEmail)
  .post(
    generateValidationMiddleware(createProjectSchema),
    createNewProject
  );

/**
 * @openapi
 * /api/management/project/{projectId}:
 *   get:
 *     tags:
 *       - management
 *     summary: Get project details by ID
 *     description: Returns project details for a given project ID, can be viewed only by project's members.
 *     parameters:
 *       - in: path
 *         name: projectId
 *         description: Project ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Project details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 projectId:
 *                   type: integer
 *                 projectName:
 *                   type: string
 *                 projectDescription:
 *                   type: string
 *                 isDeleted:
 *                   type: boolean
 *                 projectMembers:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       memberId:
 *                         type: integer
 *                       email:
 *                         type: string
 *                       role:
 *                         type: string
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Project not found
 *       '403':
 *         description: Forbidden
 *       '500':
 *         description: Internal server error
 * 
 *   patch:
 *     tags:
 *       - management
 *     summary: Update project information (both or one of name and description)
 *     description: Updates project information for a given project ID, can be accessed only by project admin.
 *     parameters:
 *       - in: path
 *         name: projectId
 *         description: Project ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               projectName:
 *                 type: string
 *                 description: New name of the project
 *               projectDescription:
 *                 type: string
 *                 description: New description of the project
 *     responses:
 *       '200':
 *         description: Project details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 projectName:
 *                   type: string
 *                   description: New name of the project
 *                 projectDescription:
 *                   type: string
 *                   description: New description of the project
 *       '400':
 *         description: Bad request
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Project not found
 *       '403':
 *         description: Forbidden
 *       '500':
 *         description: Internal server error
 * 
 *   delete:
 *     tags:
 *       - management
 *     summary: Delete project
 *     description: Deletes project for a given project ID, can be accessed only by project admin.
 *     parameters:
 *       - in: path
 *         name: projectId
 *         description: Project ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Project deleted successfully
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Project not found
 *       '403':
 *         description: Forbidden
 *       '500':
 *         description: Internal server error
 */


router.route('/project/:projectId')
  .get(
    paramParser({ projectId: 'number' }),
    memberValidationMiddleware, getProjectDetailsById)
  .patch(
    paramParser({ projectId: 'number' }),
    generateValidationMiddleware(projectInfoSchema),
    roleValidationMiddleware,
    updateProjectInfo
  )
  .delete(roleValidationMiddleware, deleteProject);

/**
 * @openapi
 * /api/management/project/{projectId}/member:
 *   get:
 *     tags:
 *       - management
 *     summary: List all members of a project
 *     description: Returns a list of all members associated with the given project ID, can be viewed by any member of the project only
 *     parameters:
 *       - in: path
 *         name: projectId
 *         description: Project ID to list members for
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A list of members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Member'
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 *   post:
 *     tags:
 *       - management
 *     summary: Add a new member to a project by email
 *     description: Add a new member to a project, only accessible by project admin
 *     parameters:
 *       - in: path
 *         name: projectId
 *         description: Project ID to add the member to
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              email:
 *               type: string
 *               description: Email of the member to add
 *              role:
 *               type: string
 *               description: Role of the member to add
 *     responses:
 *       '201':
 *         description: Member added successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Member'
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 *   patch:
 *     tags:
 *       - management
 *     summary: Update the role of a member in a project by email
 *     description: Update the role of a member in a project
 *     parameters:
 *       - in: path
 *         name: projectId
 *         description: Project ID to update the member role for
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              email:
 *               type: string
 *               description: Email of the member to update
 *              role:
 *               type: string
 *               description: Role of the member to update
 *     responses:
 *       '200':
 *         description: Member role updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Member'
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 *   delete:
 *     tags:
 *       - management
 *     summary: Remove a member from a project by email
 *     description: Remove a member from a project
 *     parameters:
 *       - in: path
 *         name: projectId
 *         description: Project ID to remove the member from
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email of the member to remove
 *     responses:
 *       '204':
 *         description: Member removed successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 */

router.route('/project/:projectId/member')
  .get(
    paramParser({ projectId: 'number' }),
    memberValidationMiddleware,
    listAllMembersByProjectId
  )
  .post(
    paramParser({ projectId: 'number' }),
    roleValidationMiddleware,
    generateValidationMiddleware(addMemberSchema),
    addNewProjectMember
  )
  .patch(
    paramParser({ projectId: 'number' }),
    roleValidationMiddleware,
    generateValidationMiddleware(addMemberSchema),
    updateMemberRole
  )
  .delete(
    roleValidationMiddleware,
    generateValidationMiddleware(removeMemberSchema),
    removeMemberFromProject
  );


/**
 * @openapi
 * /api/management/project/{projectId}/member/{memberId}:
 *   get:
 *     tags:
 *       - management
 *     summary: Get member details by ID
 *     description: Get member details by ID
 *     parameters:
 *       - in: path
 *         name: projectId
 *         description: Project ID
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: memberId
 *         description: Member ID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Member details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Member'
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 *   patch:
 *     tags:
 *       - management
 *     summary: Update member role by member ID 
 *     description: Update member role by ID, only admin can update
 *     parameters:
 *       - in: path
 *         name: projectId
 *         description: Project ID
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: memberId
 *         description: Member ID
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *                 description: Role of the member to update
 *     responses:
 *       '200':
 *         description: Member role updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectMember'
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 *   delete:
 *     tags:
 *       - management
 *     summary: Remove a member from a project by member ID
 *     description: Remove a member from a project
 *     parameters:
 *       - in: path
 *         name: projectId
 *         description: Project ID to remove the member from
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: memberId
 *         description: Member ID to remove from the project
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '204':
 *         description: Member removed successfully
 *       '401':
 *         description: Unauthorized
 *       '403':
 *         description: Forbidden
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 */

router.route('/project/:projectId/member/:memberId')
  .get(
    paramParser({ projectId: 'number', memberId: 'number' }),
    memberValidationMiddleware, getProjectMemberDetailsById)
  .patch(
    paramParser({ projectId: 'number', memberId: 'number' }),
    roleValidationMiddleware,
    generateValidationMiddleware(updateMemberSchema),
    updateMemberRole
  )
  .delete(roleValidationMiddleware, removeMemberFromProject);

/**
 * @openapi
 * /api/management/me:
 *   get:
 *     tags:
 *       - management
 *     summary: Get current user details
 *     description: Returns details about the current user.
 *     responses:
 *       '200':
 *         description: Returns details about the current user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uid:
 *                   type: string
 *                   description: The unique identifier of the user.
 *                 email:
 *                   type: string
 *                   description: The email address of the user.
 *                 groups:
 *                   type: array
 *                   description: The groups that the user belongs to.
 *                   items:
 *                     type: string
 *                 name:
 *                   type: string
 *                   description: The full name of the user.
 *                 memberId:
 *                   type: integer
 *                   description: The member ID of the user.
 */

router.route('/me')
  .get(currentUserDetails);

// TODO: these routes are not to be used, parked for future enhancement
router.route('/member')
  .post(createNewMember);

router.route('/member/:memberId')
  .get(
    paramParser({ memberId: 'number' }),
    getMemberDetailsById)
  .patch(updateMemberInfo)
  .delete(deleteMember);

module.exports = router;