const express = require('express');
const router = express.Router();
const trades = require('../controllers/trades.js')

router.post('/', trades.createTrade);

router.get('/', trades.getTradeList);




module.exports = router;
