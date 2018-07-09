var mongoose = require('mongoose');

var Message = mongoose.model('Message', {
    name: {
        type: String,
        required: true,
        trim: true,
        minlength : 1,
        default: 'Empty message'
    }
});

module.exports = {Message}