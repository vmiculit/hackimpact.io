// Requires
var mongoose = require('mongoose')

// Organization Schema
var organizationSchema = mongoose.Schema({
    name: { type: String, required: true },
    logo: { type: String, default: '/images/default-nonprofit-logo.jpg' },
    website: { type: String},
    activityShort: { type: String},
    activityLong: { type: String},
    impactLocation: { type: Array, default: ['Worldwide']},
    active: { type: Boolean, default: false},
    pending: { type: Boolean, default: true},
    timestamp: { type: Date, default: Date.now},
});

module.exports = mongoose.model('organization', organizationSchema);