const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Card = require('./Card')

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String,
    },

    cards:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: Card,
        required: false
    }


})

const User = mongoose.model("User",userSchema)
module.exports = User