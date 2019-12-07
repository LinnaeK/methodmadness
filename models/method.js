const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

var userSchema = require('./user')
var studyListSchema = require('./list')

var methodSchema = new Schema ({
    name: String,
    params: Array,
    category: String,
    action: String
}, {
    timestamps: true
})

module.exports = Mongoose.model('Method', methodSchema);