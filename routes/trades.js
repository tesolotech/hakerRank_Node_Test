const express = require('express');
const router = express.Router();
const trades = require('../controllers/trades.js')

router.post('/', trades.createTrade);

router.get('/', trades.getTradeList);

router.get('/:id', trades.getTradeById);


module.exports = router;
