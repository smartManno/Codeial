const express = require('express');
const router = express.Router(); // express router is a module

const usersController = require('../controllers/users_controller');
router.get('/profile', usersController.profile);

// see here 2 things are important 
// 1. '/sign-up' is for rendering from browser ex. http://localhost:8000/users/sign-Up
// 2. signUp is a action defined in the usersController
router.get('/sign-up', usersController.signUp);
router.get('/sign-in',usersController.signIn);

router.post('/create', usersController.create);

module.exports = router;