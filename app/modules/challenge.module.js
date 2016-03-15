// Requires
var mongoose = require('mongoose')

// Challenge Schema
var challengeSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String},
    timeframe: { type: String},
    project: { type: String},
    active: { type: Boolean, default: true},
    pending: { type: Boolean, default: false},
    organizationId: { type: mongoose.Schema.ObjectId, ref: "organization" },
    followedby: { type: Array },
    pledgedby: { type: Array },
    commitedby: { type: mongoose.Schema.ObjectId, ref: "user" },
    createdby: { type: mongoose.Schema.ObjectId, ref: "user" },
    timestamp: { type: Date, default: Date.now},
});

module.exports = mongoose.model('challenge', challengeSchema);