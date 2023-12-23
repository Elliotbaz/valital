const express = require('express');
const wordController = require('../controllers/wordController');
const router = express.Router();

router.get('/get-word/:word', wordController.getWord);

module.exports = router;
