// Requires
var mongoose = require('mongoose')

// User Schema
var userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('user', userSchema);