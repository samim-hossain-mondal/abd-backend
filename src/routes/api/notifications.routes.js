const router = require('express').Router();
const notificationsController = require('../../controllers/notifications.controllers');
const { generateValidationMiddleware } = require('../../middlewares/validation');
const notificationSchema = require('../../schemas/notifications');
/**
 * @openapi
 * components:
 *  schemas:
 *    notifications:
 *      type: object
 *      required:
 *        - title
 *        - content
 *        - content
 *        - createdAt
 *        - author
 *        - userNotification
 *      properties:
 *        title:
 *          type: string
 *          description: title of the notification.
 *        content:
 *          type: string
 *          description: content of the notification.
 *        createdAt:
 *          type: string
 *          format: date
 *          description: created date of the notification.
 *        targetType:
 *          type: string
 *          description: target type of the notification.
 *          enum:
 *            - TEAM_REQUEST
 *            - ANNOUNCEMENT
 *            - CELEBRATION
 *        targetId:
 *          type: integer
 *          description: target id of the notification.
 *        userNotification:
 *          type: array
 *          description: array of userNotification.
 */
/**
 * @openapi
 * components:
 *  schemas:
 *    userNotification:
 *      type: object
 *      required:
 *        - readStatus
 *        - memberId
 *        - notificationId
 *      properties:
 *        readStatus:
 *          type: boolean
 *          description: read status of the notification for the membeId.
 *        memberId:
 *          type: integer
 *          description: member id of the individual who are tagged in the notification.
 *        notificationId:
 *          type: integer
 *          description: id of the user notification.
 */

/**
 * @openapi
 * /api/notifications/{projectId}/{memberId}:
 *   get:
 *     tags:
 *       - notifications
 *     summary: get all notifications by projectId and memberId
 *     description: get all notifications by projectId and memberId
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: page number to get notifications
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: limit of notifications to get
 *       - in: query
 *         name: readStatus
 *         schema:
 *           type: boolean
 *           description: read status of the notification for the membeId.
 *       - in: query
 *         name: targetType
 *         schema:
 *           type: string
 *           description: target type of the notification.
 *           enum:
 *             - TEAM_REQUEST
 *             - ANNOUNCEMENT
 *             - CELEBRATION
 * 
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: integer
 *         description: project id to get notifications
 *       - in: path
 *         name: memberId
 *         required: true
 *         schema:
 *           type: integer
 *         description: member id to get notifications
 *     responses:
 *       200:
 *         description: An array of  notifications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/notifications"
 *       401:
 *         description: Unauthorized if user is not logged in
 *       500:
 *         description: Internal server error
 *  
 */
router.route('/:projectId/:memberId').get(
  generateValidationMiddleware(notificationSchema.getNotificationsParamSchema, 'params'),
  notificationsController.getNotifications);
/**
 * @openapi
 * /api/notifications/{userNotificationId}:
 *   put:
 *     tags:
 *       - userNotification
 *     summary: edit a userNotification
 *     description: edit a userNotification
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - readStatus
 *               - memberId
 *               - notificationId
 *             properties:
 *               readStatus:
 *                 type: boolean
 *                 description: read status of the notification for the membeId.
 *               memberId:
 *                 type: integer
 *                 description: member id of the individual who are tagged in the notification.
 *               notificationId:
 *                 type: integer
 *                 description: notification id of the user notification.
 *     parameters:
 *       - in: path
 *         name: userNotificationId
 *         required: true
 *         schema:
 *           type: integer
 *         description: userNotification id to update
 *     responses:
 *       200:
 *         description: An array of user notifications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/userNotification"
 *       401:
 *         description: Unauthorized if user is not logged in
 *       500:
 *         description: Internal server error
 */

router.route('/:userNotificationId').put(
  generateValidationMiddleware(notificationSchema.editNotificationsParamSchema, 'params'),
  generateValidationMiddleware(notificationSchema.editNotificationsBodySchema, 'body'),
  notificationsController.updateNotification);
module.exports= router;