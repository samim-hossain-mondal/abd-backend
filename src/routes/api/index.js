const express = require('express');
const router = express.Router();

router.use('/po-notes', require('./poNotes.routes'));
router.use('/dsm/celebrations', require('./dsm/celebrationBoard.routes'));
router.use('/dsm/announcements', require('./dsm/announcements.routes'));
router.use('/management', require('./management/management.routes'));

module.exports = router;
