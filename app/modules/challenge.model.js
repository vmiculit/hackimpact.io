// Requires
var mongoose = require('mongoose')

// Challenge Schema
var challengeSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String},
    timeframe: { type: String},
    project: { type: String},
    active: { type: Boolean, default: false},
    pending: { type: Boolean, default: true},
    organizationId: { type: Number, required: true},
    followedby: { type: Array },
    pledgedby: { type: Array },
    commitedby: { type: Number },
    createdby: { type: Number },
    timestamp: { type: Date, default: Date.now},
});

module.exports = mongoose.model('challenge', challengeSchema);