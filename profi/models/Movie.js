const {Schema, model} = require('mongoose')


const Movie = new Schema({
    id: {type: String, unique: true, required: true},
    name: {type: String, required: true},
    year: [{type: String}],
    time:{type: String}
})

module.exports = model('Movie', Movie)
