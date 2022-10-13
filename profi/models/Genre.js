const {Schema, model} = require('mongoose')


const Genre = new Schema({
    id: {type: String, unique: true, required: true},
    name: {type: String, required: true}
})

module.exports = model('Genre', Genre)
