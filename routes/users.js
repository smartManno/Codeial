const express = require('express');
const router = express.Router(); // express router is a module

const usersController = require('../controllers/users_controller');
router.get('/profile', usersController.profile);

module.exports = router;