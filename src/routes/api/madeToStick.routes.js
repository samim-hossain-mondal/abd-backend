const router = require('express').Router();
const { generateValidationMiddleware } = require('../../middlewares/validation');
const schema = require('../../schemas/madeToStick');
const madeToStickController = require('../../controllers/madeToStick.controller');
const { paramParser } = require('../../middlewares/paramParser');
/**
 * @openapi
 * components:
 *  schemas:
 *    made-to-stick:
 *      type: object
 *      required:
 *        - value
 *        - x
 *        - y
 *        - w
 *        - h
 *        - type
 *        - backgroundColor
 *      properties:
 *        value:
 *          type: string
 *          description: value of the card 
 *        x:
 *          type: integer
 *          description: x coordinate of the card
 *        y:
 *          type: integer
 *          description: y coordinate of the card
 *        w:
 *          type: integer
 *          description: width of the card
 *        h:
 *          type: integer
 *          description: height of the card
 *        type:
 *          type: string
 *          enum:
 *            - TEXT
 *            - IMAGE
 *          description: type of the card
 *        emailId:
 *          type: string
 *          description: email id of the individual who created the card
 *        backgroundColor:
 *          type: string
 *          description: background color of the card
 */
/**
 * @openapi
 * /api/madeToStick:
 *   get:
 *     tags:
 *       - made-to-stick
 *     summary: List all made to stick items
 *     responses:
 *       200:
 *         description: List of all made to stick items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/made-to-stick"
 *       500:
 *         description: Internal server error
 *   
 *   post:
 *     tags:
 *       - made-to-stick
 *     summary: Create a made to stick item
 *     description: Create a made to stick item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - value
 *               - x
 *               - y
 *               - w
 *               - h
 *               - type
 *               - emailId
 *               - backgroundColor
 *             properties:
 *               value:
 *                 type: string
 *                 description: value of the card
 *               x:
 *                 type: integer
 *                 description: x coordinate of the card
 *               y:
 *                 type: integer
 *                 description: y coordinate of the card
 *               h:
 *                 type: integer
 *                 description: height of the card
 *               w:
 *                 type: integer
 *                 description: width of the card
 *               type:
 *                 type: string
 *                 enum:
 *                   - IMAGE
 *                   - TEXT
 *                 description: type of the card
 *               emailId:
 *                 type: string
 *                 description: email id of the individual who created the card
 *               backgroundColor:
 *                 type: string
 *                 description: background color of the card
 * 
 *     responses:
 *       201:
 *         description: made to stick created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/made-to-stick"
 *       400:
 *         description: Bad request if invalid data is passed
 *       500:
 *         description: Internal server error
*/

router.get('/', madeToStickController.getAllMadeToStick);
router.post('/', generateValidationMiddleware(schema.madeToStickCreateSchema), madeToStickController.createMadeToStick);

/**
 * @openapi
 * /api/madeToStick/{i}:
 *   delete:
 *     tags:
 *       - made-to-stick
 *     summary: Delete a made to stick item
 *     description: Delete a made to stick item
 *     parameters:
 *       - in: path
 *         name: i
 *         schema:
 *          type: string
 *         required: true
 *         description: id of the made to stick item
 *     responses:
 *       200:
 *         description: made to stick deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/made-to-stick"
 *       500:
 *         description: Internal server error
 *   
 *   put:
 *     tags:
 *       - made-to-stick
 *     summary: Edit a made to stick item
 *     description: Edit a made to stick item
 *     parameters:
 *       - in: path
 *         name: i
 *         schema:
 *          type: string
 *         required: true
 *         description: id of the made to stick item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - value
 *               - x
 *               - y
 *               - w
 *               - h
 *               - type
 *               - emailId
 *               - backgroundColor
 *             properties:
 *               value:
 *                 type: string
 *                 description: value of the card
 *               x:
 *                 type: integer
 *                 description: x coordinate of the card
 *               y:
 *                 type: integer
 *                 description: y coordinate of the card
 *               h:
 *                 type: integer
 *                 description: height of the card
 *               w:
 *                 type: integer
 *                 description: width of the card
 *               type:
 *                 type: string
 *                 enum:
 *                   - IMAGE
 *                   - TEXT
 *                 description: type of the card
 *               emailId:
 *                 type: string
 *                 description: email id of the individual who created the card
 *               backgroundColor:
 *                 type: string
 *                 description: background color of the card
 * 
 *     responses:
 *       201:
 *         description: made to stick edited successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/made-to-stick"
 *       400:
 *         description: Bad request if invalid data is passed
 *       500:
 *         description: Internal server error
*/

router.put('/:i',
  paramParser({ i: 'number' }),
  generateValidationMiddleware(schema.madeToStickEditSchema), madeToStickController.editMadeToStick);
router.delete('/:i',
  paramParser({ i: 'number' }),
  generateValidationMiddleware(schema.madeToStickDeleteParamSchema, 'params'), madeToStickController.deleteMadeToStick);

module.exports = router;


