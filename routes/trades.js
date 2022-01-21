const express = require('express');
const router = express.Router();
const trades = require('../controllers/trades.js')

router.post('/', trades.createTrade);

router.get('/', trades.getTradeList);

router.get('/:id', trades.getTradeById);

router.put('/:id', trades.updateTrade);

router.patch('/:id', trades.updateTradeSFeild);

router.delete('/:id', trades.deleteTrade);

module.exports = router;
