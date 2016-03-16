// Requires
var mongoose = require('mongoose')

// Comment Schema
var commentSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, ref: "user" },
    challengeId: { type: mongoose.Schema.ObjectId, ref: "challenge" },
    content: { type: String},
    private: { type: Boolean, default: false},
    new: { type: Boolean, default: true},
    timestamp: { type: Date, default: Date.now},
});

module.exports = mongoose.model('comment', commentSchema);