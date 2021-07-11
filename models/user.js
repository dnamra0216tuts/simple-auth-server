const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: String,
    password: String
})

// name, schema, collection
module.exports = mongoose.model('user', userSchema, 'users')