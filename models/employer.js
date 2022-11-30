const mongoose = require('mongoose')

// define schema for a Employer
var employerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Region name is required'
    },
    region: {
        type: String,
        required: 'Region name is required'
    },
    description: {
        type: String,
        required: 'Description is required'
    }
})

// make public
module.exports = mongoose.model('Eegion', employerSchema)