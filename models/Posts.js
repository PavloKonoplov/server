const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        default: 'Other',
        required: false
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: String,
        default: 'Free',
        required: false
    },
    startDate: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: false
    },
    organization: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Posts', PostSchema);
