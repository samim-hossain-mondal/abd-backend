const express = require('express');
const { authMiddleware } = require('../../middlewares/auth');
const router = express.Router();

router.use('/po-notes', require('./poNotes.routes'));
router.use('/dsm/team-requests',require('./dsm/teamRequests.routes'));
router.use('/dsm/announcements',require('./dsm/announcements.routes'));
router.use('/dsm/sentiment-meter',require('./dsm/sentimentMeter.routes'));


router.use(authMiddleware);

router.use('/po-notes', require('./poNotes.routes'));
router.use('/dsm/celebrations', require('./dsm/celebrationBoard.routes'));
router.use('/dsm/announcements', require('./dsm/announcements.routes'));
router.use('/dsm/team-requests',require('./dsm/teamRequests.routes'));
router.use('/management', require('./management/management.routes'));

module.exports = router;
