const express = require('express');
const router = express.Router();

// Import middlewares that will be used in users routes
const validateEmail = require('../middlewares/email-validator');
const validatePassword = require('../middlewares/password-validator');

// Import the controller users
const usersCtrl = require('../controllers/users');

// Definition of routes used to manage authentication and registration of users in the application
router.post('/signup', validateEmail, validatePassword, usersCtrl.signup);
router.post('/login', usersCtrl.login);

module.exports = router;