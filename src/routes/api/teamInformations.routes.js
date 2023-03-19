const router = require('express').Router();
const teamInformationsController = require('../../controllers/teamInformations.controller');
const { generateValidationMiddleware } = require('../../middlewares/validation');
const schema = require('../../schemas/teamInformationsSchema');
/**
 * @openapi
 * components:
 *  schemas:
 *    TeamInformation:
 *      type: object
 *      required:
 *        - name
 *        - emailId
 *        - projectId
 *        - role
 *        - message
 *        - bio
 *        - startDate
 *        - endDate
 *      properties:
 *        name:
 *          type: string
 *          description: The name of the individual.
 *        emailId:
 *          type: string
 *          description: The email address of the individual who created the card.
 *        projectId:
 *          type: string
 *          description: The project ID associated with the teamInformation.
 *        role:
 *          type: string
 *          description: The role of the individual in the project.
 *        message:
 *          type: string
 *          description: A message associated with the teamInformation.
 *        bio:
 *          type: string
 *          description: A bio associated with the teamInformation.
 *        startDate:
 *          type: string
 *          format: date
 *          description: The start date associated with the teamInformation.
 *        endDate:
 *          type: string
 *          format: date
 *          description: The end date associated with the teamInformation.
 */

/**
 * @openapi
 * /api/teamInformations:
 *   get:
 *     tags:
 *       - teamInformations
 *     summary: List all teamInformations
 *     description: List all teamInformations
 *     responses:
 *       200:
 *         description: An array of teamInformations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/TeamInformation"
 *       401:
 *         description: Unauthorized if user is not logged in
 *       500:
 *         description: Internal server error
 *   
 *   post:
 *     tags:
 *       - teamInformations
 *     summary: Create a teamInformation
 *     description: Create a teamInformation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - projectId
 *               - role
 *               - message
 *               - bio
 *               - startDate
 *               - endDate
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the individual.
 *               emailId:
 *                 type: string
 *                 format: email
 *                 description: The email address of the individual who created the card.
 *               projectId:
 *                 type: string
 *                 description: The project ID associated with the teamInformation.
 *               role:
 *                 type: string
 *                 description: The role of the individual in the project.
 *               message:
 *                 type: string
 *                 description: A message associated with the teamInformation.
 *               bio:
 *                 type: string
 *                 description: A bio associated with the teamInformation.
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: The start date associated with the teamInformation.
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: The end date associated with the teamInformation.
 *     responses:
 *       201:
 *         description: teamInformation created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/TeamInformation"
 *       400:
 *         description: Bad request if invalid data is passed
 *       401:
 *         description: Unauthorized if user is not logged in
 *       500:
 *         description: Internal server error
 */

router.route('/')
  .post(
    generateValidationMiddleware(schema.createTeamInformationSchema),
    teamInformationsController.createTeamInformation
  )
  .get(
    teamInformationsController.getAllTeamInformations
  );
/**
 * @openapi
 * /api/teamInformations/{id}:
 *   delete:
 *     tags:
 *       - teamInformations
 *     summary: delete teamInformation by id
 *     description: delete teamInformation by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The teamInformation id
 *     responses:
 *       200:
 *         description: teamInformation deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/TeamInformation"
 *       401:
 *         description: Unauthorized if user is not logged in
 *       500:
 *         description: Internal server error
 *   
 *   put:
 *     tags:
 *       - teamInformations
 *     summary: edit a teamInformation
 *     description: edit a teamInformation
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The teamInformation id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - projectId
 *               - role
 *               - message
 *               - bio
 *               - startDate
 *               - endDate
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the individual.
 *               emailId:
 *                 type: string
 *                 format : email
 *                 description: The email address of the individual who created the card.
 *               projectId:
 *                 type: string
 *                 description: The project ID associated with the teamInformation.
 *               role:
 *                 type: string
 *                 description: The role of the individual in the project.
 *               message:
 *                 type: string
 *                 description: A message associated with the teamInformation.
 *               bio:
 *                 type: string
 *                 description: A bio associated with the teamInformation.
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: The start date associated with the teamInformation.
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: The end date associated with the teamInformation.
 *     responses:
 *       200:
 *         description: teamInformation edited successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/TeamInformation"
 *       400:
 *         description: Bad request if invalid data is passed
 *       401:
 *         description: Unauthorized if user is not logged in
 *       500:
 *         description: Internal server error
 */
router.route('/:id')
  .put(
    generateValidationMiddleware(schema.updateTeamInformationParamSchema,'params'),
    generateValidationMiddleware(schema.updateTeamInformationSchema),

    teamInformationsController.updateTeamInformation
  )
  .delete(
    generateValidationMiddleware(schema.deleteTeamInformationParamSchema,'params'),
    teamInformationsController.deleteTeamInformation
  );
/**
 * @openapi
 * /api/teamInformations/projectId/{projectId}:
 *   get:
 *     tags:
 *       - teamInformations
 *     summary: Get teamInformations by project ID
 *     description: Get teamInformations by project ID
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: string
 *         description: The project ID
 *     responses:
 *       200:
 *         description: An array of teamInformations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/TeamInformation"
 *       401:
 *         description: Unauthorized if user is not logged in
 *       500:
 *         description: Internal server error
 *  
 */
// Get teamInformations by project ID
router.route('/projectId/:projectId')
  .get(
    generateValidationMiddleware(schema.getTeamInformationsByProjectIdParamSchema,'params')
    ,
    teamInformationsController.getTeamInformationsByProjectId
  );
module.exports = router;