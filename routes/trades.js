const express = require('express');
const router = express.Router();
const trades = require('../controllers/trades.js')

router.post('/', trades.createTrade);
module.exports = router;
