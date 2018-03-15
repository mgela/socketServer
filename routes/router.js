const express = require('express');
const router = express.Router();

const userController = require('../controllers/signUpControllers');


router.post('/registerUser', userController.auth);
router.post('/signUpUser', userController.signUp);


module.exports = router;
