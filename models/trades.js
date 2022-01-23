// Uncomment the code below to use Sequelize ORM
// const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// Uncomment the code below to use Mongoose ORM
const mongoose = require('mongoose');

const TradeSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    type: { type: String, required: true },
    user_id: { type: Number, required: true },
    symbol: { type: String, required: true },
    shares: { type: Number, required: true },
    price: { type: Number, required: true },
    timestamp: { type: Number, required: true }
}, {
    timestamps: true
});

TradeSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
TradeSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v;
        ret.id = ret._id.toString();
        delete ret._id;
    },
});

mongoose.set('useFindAndModify', false);


const Trade = mongoose.model('Trades', TradeSchema);
exports.Trade = Trade;
// module.exports = mongoose.model('Trade', TradeSchema);

exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        Trade.findOne({ _id: id }).exec((err, result) => {
            if (err) return reject(err);
            return resolve(result);

        })
    })
};

exports.createTrade = (tradeData) => {
    const trade = new Trade(tradeData);
    return trade.save();
};

exports.getTradeList = () => {
    return new Promise((resolve, reject) => {
        Trade.find()
            .exec(function (err, trade) {
                if (err) {
                    reject(err);
                } else {
                    resolve(trade);
                }
            })
    });
};


