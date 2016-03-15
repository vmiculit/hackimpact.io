// Requires
var mongoose = require('mongoose')

// Comment Schema
var commentSchema = mongoose.Schema({
    userId: { type: Number, required: true },
    challengeId: { type: Number, required: true },
    content: { type: String},
    private: { type: Boolean, default: false},
    new: { type: Boolean, default: true},
    timestamp: { type: Date, default: Date.now},
});

module.exports = mongoose.model('comment', commentSchema);