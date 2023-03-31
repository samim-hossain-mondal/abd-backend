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
 *        - memberId
 *        - projectId
 *        - projectRole
 *        - message
 *        - bio
 *        - startDate
 *        - endDate
 *      properties:
 *        memberId:
 *          type: integer
 *          description: member id of the individual who created the card.
 *        projectId:
 *          type: integer
 *          description: The project ID associated with the teamInformation.
 *        projectRole:
 *          type: string
 *          description: The role of the individual in the project.
 *        message:
 *          type: string
 *          description: slack link of the individual.
 *        bio:
 *          type: string
 *          description: bio associated with the individual in the project.
 *        startDate:
 *          type: string
 *          format: date
 *          description:  start date of the member in the project.
 *        endDate:
 *          type: string
 *          format: date
 *          description:  end date of the member with the project.
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
 *               - memberId
 *               - projectId
 *               - projectRole
 *               - message
 *               - bio
 *               - startDate
 *               - endDate
 *             properties:
 *               name:
 *                 type: string
 *                 description: name of the individual who created the card.
 *               memberId:
 *                 type: integer
 *                 description: member id of the individual who created the card.
 *               projectId:
 *                 type: integer
 *                 description: The project ID associated with the teamInformation.
 *               projectRole:
 *                 type: string
 *                 description: The role of the individual in the project.
 *               message:
 *                 type: string
 *                 description: slack link of the individual.
 *               bio:
 *                 type: string
 *                 description: bio associated with the individual with the project.
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: start date of the individual with the project.
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: end date of the individual with the project.
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
 *         description:  teamInformation id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - memberId
 *               - projectId
 *               - projectRole
 *               - message
 *               - bio
 *               - startDate
 *               - endDate
 *             properties:
 *               memberId:
 *                 type: integer
 *                 description: member id of the individual who created the card.
 *               projectId:
 *                 type: integer
 *                 description: The project ID associated with the teamInformation.
 *               name:
 *                 type: string
 *                 description: The name of the individual in the project.
 *               projectRole:
 *                 type: string
 *                 description: The role of the individual in the project.
 *               message:
 *                 type: string
 *                 description: slack link of the individual.
 *               bio:
 *                 type: string
 *                 description: bio associated with the individual in the project.
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: start date of the individual in the project.
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: end date of the individual in the project.
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
 *           type: integer
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
    generateValidationMiddleware(schema.getTeamInformationsByProjectIdParamSchema,'params'),
    teamInformationsController.getTeamInformationsByProjectId
  );
module.exports = router;