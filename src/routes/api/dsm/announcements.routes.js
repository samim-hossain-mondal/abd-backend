const router = require('express').Router();
const {
  listAnnouncements,
  createAnnouncement,
  detailAnnouncement,
  editAnnouncement,
  deleteAnnouncement,
  getAnnouncementsByDate
} = require('../../../controllers/dsm/announcements.controller');
const { generateValidationMiddleware } = require('../../../middlewares/validation');
const { paramParser } = require('../../../middlewares/paramParser');
const announcementsSchema = require('../../../schemas/dsm/announcementsSchema');
const { memberValidationMiddleware, roleValidationMiddleware } = require('../../../middlewares/roleValidation');

/**
 * @openapi
 * components:
 *  schemas:
 *    Announcement:
 *      type: object
 *      required:
 *      - author
 *      - content
 *      - announcementId
 *      properties:
 *        announcementId:
 *          type: integer
 *          description: Unique identifier of the announcement
 *        author:
 *          type: string
 *          description: User id of the author
 *        content:
 *          type: string
 *          description: Content of the announcement
 *        createdAt:
 *          type: string
 *          format: date-time
 *          description: Created at
*/

/**
 * @openapi
 * /api/dsm/announcements:
 *  get:
 *    tags:
 *      - announcements
 *    summary: List announcements
 *    description: List all the announcements
 *    responses:
 *      '200':
 *        description: List of announcements
 *        content:
 *          application/json:
 *            schema:
 *             type: array
 *             items:
 *                $ref: '#/components/schemas/Announcement'
 *      '500':
 *        description: Internal server error
 *  post:
 *    tags:
 *       - announcements
 *    summary: Create an announcement
 *    description: Create an announcement
 *    requestBody:
 *       required: true
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            required:
 *              - content
 *            properties:
 *             content:
 *              type: string
 *              description: Content of the announcement
 *    responses:
 *       '201':
 *         description: Announcement created
 *         content:
 *           application/json:
 *            schema:
 *              $ref: '#/components/schemas/Announcement'
 *       '400':
 *         description: Bad request if unacceptable id is passed
 *       '500':
 *         description: Internal server error
*/

router.route('/:projectId')
  .get(
    paramParser({ projectId: 'number' }),
    memberValidationMiddleware,
    listAnnouncements
  )
  .post(
    paramParser({ projectId: 'number' }),
    roleValidationMiddleware,
    generateValidationMiddleware(announcementsSchema.createAnnouncementSchema),
    createAnnouncement);

const requiredParams = {
  id: 'number'
};

// const paramValidationMiddleware = generateValidationMiddleware(announcementsSchema.announcementsParamSchema, 'params');
const paramParsingMiddleware = paramParser(requiredParams);

/**
 * @openapi
 * /api/dsm/announcements/{id}:
 *  get:
 *    tags:
 *      - announcements
 *    summary: Get an announcement
 *    description: Get an announcement
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Unique identifier of the announcement
 *    responses:
 *      '200':
 *        description: Announcement found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Announcement'
 *      '400':
 *        description: Bad request if unacceptable id is passed
 *      '404':
 *        description: Not found if no announcement found with id
 *      '500':
 *        description: Internal server error
 *  patch:
 *    tags:
 *      - announcements
 *    summary: Partial update an announcement
 *    description: Partial update an announcement
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Unique identifier of the announcement
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              content:
 *                type: string
 *                description: Content of the announcement
 *    responses:
 *      '200':
 *        description: Announcement updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Announcement'
 *      '400':
 *        description: Bad request if unacceptable id is passed
 *      '404':
 *        description: Not found if no announcement found with id
 *      '500':
 *        description: Internal server error
 *  delete:
 *    summary: Delete an announcement
 *    description: Delete an announcement
 *    tags:
 *      - announcements
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Unique identifier of the announcement
 *    responses:
 *      '204':
 *        description: Announcement deleted
 *      '400':
 *        description: Bad request if unacceptable id is passed
 *      '404':
 *        description: Not found if no announcement found with id
 *      '500':
 *        description: Internal server error
*/
router.route('/:projectId/:id')
  .get(
    paramParser({ projectId: 'number', id: 'number' }),
    memberValidationMiddleware,
    paramParsingMiddleware,
    detailAnnouncement
  )
  .patch(
    paramParser({ projectId: 'number', id: 'number' }),
    generateValidationMiddleware(announcementsSchema.patchAnnouncementSchema),
    paramParsingMiddleware,
    roleValidationMiddleware,
    editAnnouncement
  )
  .delete(
    paramParser({ projectId: 'number', id: 'number' }),
    paramParsingMiddleware,
    roleValidationMiddleware,
    deleteAnnouncement
  );
// get announcement by date
/**
 * @openapi
 * /api/dsm/announcements/{projectId}/date/{date}:
 *  get:
 *    tags:
 *      - announcements
 *    summary: Get announcements by date
 *    description: Get announcements by date
 *    parameters:
 *      - in: path
 *        name: projectId
 *        schema:
 *          type: integer
 *          required: true
 *          description: Unique identifier of the project
 *      - in: path
 *        name: date
 *        schema:
 *          type: string
 *          required: true
 *          description: Date of the announcements
 *    responses:
 *      '200':
 *        description: Announcements found
 *        content:
 *           application/json:
 *             schema:
 *               type: array
 *             items:
 *               $ref: '#/components/schemas/Announcement'
 *      '400':
 *        description: Bad request if unacceptable id is passed
 *      '404':
 *        description: Not found if no announcement found with id
 *      '500':
 *        description: Internal server error
*/

router.route('/:projectId/date/:date')
  .get(
    paramParser({ projectId: 'number' }),
    memberValidationMiddleware,
    getAnnouncementsByDate
  );
module.exports = router;