const express = require('express');
const router = express.Router();

const userController = require('./controllers/signUpControllers');


router.post('/registerUser', userController.auth);


module.exports = router;
