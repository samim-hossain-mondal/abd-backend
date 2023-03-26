const router = require('express').Router();
const leavesController = require('../../controllers/leaves.controller');
const { paramParser } = require('../../middlewares/paramParser');
const {
  generateValidationMiddleware,
} = require('../../middlewares/validation');
const { leaveSchema } = require('../../schemas/leaveSchema');

/**
 * @openapi
 * components:
 *   schemas:
 *     Leave:
 *       type: object
 *       required:
 *         - leaveId
 *         - event
 *         - isRisk
 *         - startDate
 *         - endDate
 *       properties:
 *         leaveId:
 *           type: integer
 *           description: Unique identifier of the leave
 *         event:
 *           type: string
 *           description: Event of the leave
 *         isRisk:
 *           type: boolean
 *           description: Is the leave a risk
 *         startDate:
 *           type: string
 *           format: date
 *           description: Start date of the leave
 *         endDate:
 *           type: string
 *           format: date
 *           description: End date of the leave
 *         userId:
 *           type: string
 *           description: Unique identifier of the user
 *         userFullName:
 *           type: string
 *           description: Full name of the user
*/



/**
 * @openapi
 * /api/leaves:
 *   get:
 *     tags:
 *       - leaves
 *     summary: List all leaves
 *     description: List all leaves
 *     responses:
 *       200:
 *         description: An array of leaves
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Leave"
 *       400:
 *         description: Bad request if invalid filters are passed
 *       401:
 *         description: Unauthorized if user is not logged in
 *       404:
 *         description: Not found if no po notes found with filters
 *       500:
 *         description: Internal server error
 *   
 *   post:
 *     tags:
 *       - leaves
 *     summary: Create a leave
 *     description: Create a leave
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - event
 *               - isRisk
 *               - startDate
 *               - endDate
 *             properties:
 *               event:
 *                 type: string
 *                 description: Event of the leave
 *               isRisk:
 *                 type: boolean
 *                 description: Is the leave a risk
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: Start date of the leave
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: End date of the leave
 *     responses:
 *       201:
 *         description: leave created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Leave"
 *       400:
 *         description: Bad request if invalid data is passed
 *       401:
 *         description: Unauthorized if user is not logged in
 *       500:
 *         description: Internal server error
*/
router
  .route('/:projectId')
  .get(leavesController.getAllLeaves)
  .post(
    generateValidationMiddleware(leaveSchema),
    leavesController.createLeave
  );


/**
 * @openapi
 * /api/leaves/{id}:
 *   put:
 *     tags:
 *       - leaves
 *     summary: edit leave
 *     description: edit leave
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the leave to get
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - event
 *               - isRisk
 *               - startDate
 *               - endDate
 *             properties:
 *               event:
 *                 type: string
 *                 description: Event of the leave
 *               isRisk:
 *                 type: boolean
 *                 description: Is the leave a risk
 *               startDate:
 *                 type: string
 *                 format: date
 *                 description: Start date of the leave
 *               endDate:
 *                 type: string
 *                 format: date
 *                 description: End date of the leave
 *     responses:
 *       200:
 *         description: edited leave
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Leave"
 *       400:
 *         description: Bad request if invalid filters are passed
 *       401:
 *         description: Unauthorized if user is not logged in
 *       404:
 *         description: Not found if no po notes found with filters
 *       500:
 *         description: Internal server error
 *   
 *   delete:
 *     tags:
 *       - leaves
 *     summary: Delete a leave
 *     description: Delete a leave
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the leave to get
 *     responses:
 *       204:
 *         description: leave deleted successfully
 *       400:
 *         description: Bad request if invalid data is passed
 *       401:
 *         description: Unauthorized if user is not logged in
 *       500:
 *         description: Internal server error
*/
router
  .route('/:projectId/:id')
  .put(
    generateValidationMiddleware(leaveSchema),
    paramParser({ id: 'number' }),
    leavesController.editLeave
  )
  .delete(
    paramParser({ id: 'number' }),
    leavesController.deleteLeave
  );

module.exports = router;
