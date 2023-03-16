const router = require('express').Router();
const { getAllUsers, createUsers } = require('../../controllers/user.controllers');

router.get('/', getAllUsers);
router.post('/', createUsers);

module.exports = router;