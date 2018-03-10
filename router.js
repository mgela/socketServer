const express = require('express');
const router = express.Router();

const userController = require('./controllers/index');


router.get('/socket', userController.socket);


module.exports = router;
