const {Schema, model} = require('mongoose')


const User = new Schema({
    Genre_Id: {type: String, unique: true, required: true, ref: 'Genre'},
    Movie_Id: {type: String, required: true, ref: 'Movie'}
})

module.exports = model('User', User)
