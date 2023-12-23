const express = require('express');
const numberController = require('../controllers/numberController');
const router = express.Router();

router.post('/number-to-word', numberController.numberToWord);

module.exports = router;
