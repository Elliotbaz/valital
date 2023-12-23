const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/who-made-me', userController.whoMadeMe);

module.exports = router;
