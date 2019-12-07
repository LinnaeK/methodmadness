const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

var methodSchema = require('./method')
var studyListSchema = require('./list')

var userSchema = new Schema {
    firstName: String,
    lastName: String,
    email: String,
    googleId: String,
    favMethods: [{type: Schema.Types.ObjectId, ref: 'Method'}]
    studyList: [{type: Schema.Types.ObjectId, ref: 'List'}]
}

module.exports = Mongoose.model('User', userSchema);