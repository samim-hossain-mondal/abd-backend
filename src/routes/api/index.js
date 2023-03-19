const express = require('express');
const { authMiddleware } = require('../../middlewares/auth');
const router = express.Router();
router.use(authMiddleware);
router.use('/po-notes', require('./poNotes.routes'));
router.use('/po-notes', require('./poNotes.routes'));
router.use('/dsm/team-requests',require('./dsm/teamRequests.routes'));
router.use('/dsm/announcements',require('./dsm/announcements.routes'));
router.use('/dsm/sentiment-meter',require('./dsm/sentimentMeter.routes'));
router.use('/dsm/celebrations', require('./dsm/celebrationBoard.routes'));
router.use('/madeToStick', require('./madeToStick.routes'));
router.use('/leaves', require('./leaves.routes'));
router.use('/teamInformations', require('./teamInformations.routes'));

module.exports = router;