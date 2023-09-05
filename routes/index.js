const express = require('express');
const router = express.Router(); // Express router is a module which seprates route and controller
// in this file we will define all sub-routes
const homeController = require('../controllers/home_controller');

//const usersController = require('../controllers/users_controller');
console.log("Router loaded");

//accessing the homecontroller's action from browser search url
router.get('/',homeController.home); 

// this is for accessing the single page from users router folder like profile 
// router.get('/users/profile', usersController.profile);  


//in this I need to tell that in userController I can write all user  related API's like
// localhost:8000/users/profile, localhost:8000/users/create-user
//so here till localhost:8000/users we are accessing.
  //we will write subroutes here in this way
// but if there is 10 pages in users the how i will access 
// we are using users router then we write router.use to use any router like users
// in the users router we have written all the controller so no need to import any controller hence commenting line 6
router.use('/users',require('./users'));

module.exports = router;