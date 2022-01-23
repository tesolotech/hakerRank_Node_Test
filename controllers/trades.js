const Trades = require('../models/trades');


// Create new trades
exports.createTrade = (req, res, next) => {
    console.log(req.body)
    if (!Object.keys(req.body).length) {
        return res.status(400).send({ error: "you can't submit empty!!" });
    }
    if (((!req.body.shares < 100) && (!req.body.shares > 0))) {
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

exports.getTradeById = (req, res) => {
    Trades.findById(req.params.id)
        .then((result) => {
            let response = {
                status: 200,
                message: "SUCCESS",
                data: result
            }
            res.status(200).json(response);

        }).catch((err) => {
            let response = {
                status: 400,
                message: "ERROR",
                data: {}
            }
            res.status(400).json(response);
        })
};

exports.updateTrade = (req, res) => {
    res.status(405).json({ error: 'API does not allow delete and update trade details righ now!' })
}

exports.updateTradeSFeild = (req, res) => {
    res.status(405).json({ error: 'API does not allow delete and update trade details righ now!' })
}

exports.deleteTrade = (req, res) => {
    res.status(405).json({ error: 'API does not allow delete and update trade details righ now!' })
}


