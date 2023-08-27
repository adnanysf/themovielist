const mongoose = require('mongoose')
const Schema = mongoose.Schema



const cardSchema = new Schema({
    rankOne: {
        type: String,
        required: true
    },
    rankTwo: {
        type: String,
        required: true
    },
    rankThree: {
        type: String,
        required: true
    },
    rankFour: {
        type: String,
        required: true
    },
    rankFive: {
        type: String,
        required: true
    },

})

const Card = mongoose.model('Card',cardSchema)
module.exports = Card