'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Photo = new Schema({
    name: {
        type: String
    },
    url: {
        type: String,
        required: 'Url is required'
    },
    date_added: {
        type: Date,
        default: Date.now
    }
});

var User = new Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    email: {
        type: String,
        required: 'Email is required'
    },
    date_added: {
        type: Date,
        default: Date.now
    },
    photos: [Photo]
});

module.exports = mongoose.model('Users', User);