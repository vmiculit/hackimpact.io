// Requires
var mongoose = require('mongoose')

// User Schema
var userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    type: { type: String, required: true},
    role: { type: String, required: true},
    organizationId: { type: mongoose.Schema.ObjectId, ref: "organization" },
    name: { type: String, required: true },
    image: { type: String, default: '/images/default-user.jpg' },
    skills: { type: Array },
    timestamp: { type: Date, default: Date.now},
});

module.exports = mongoose.model('user', userSchema);