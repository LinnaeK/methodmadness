const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

var studyListSchema = new Schema ({
    item: String,
    resources: Array,
    done: Boolean,
}, {
    timestamps: true
})

module.exports = Mongoose.model('List', studyListSchema);