const Trades = require('../models/trades.js');


// Create new trades
exports.createTrade = (req, res, next) => {
    if (!Object.keys(req.body).length) {
        return res.status(400).send({ error: "you can't submit empty!!" });
    }
    if (!req.body.shares > 100) {
        return res.status(400).send({ error: "Share should be less then 100 and greater then 1" });
    }
    if (!req.body.type === 'buy' && !req.body.type === 'sell') {
        return res.status(400).send({ error: "Type should be buy and sell only!!" });
    }

    Trades.createTrade(req.body).then((resp) => {
        let response = {
            status: 201,
            message: "SUCEESS",
            data: resp
        }
        res.status(201).send(response);
    }).catch((err) => {
        let response = {
            status: 400,
            message: "ERROR",
            error: err
        }
        return res.status(400).send(response);
    })

};


exports.getTradeList = (req, res) => {
    Trades.getTradeList()
        .then((result) => {
            let response = {
                status: 200,
                message: "SUCEESS",
                data: result
            }
            res.status(200).json(response);
        }).catch((err) => {
            let response = {
                status: 400,
                message: "ERROR",
                data: []
            }
            res.status(400).json(response);
        })
}



