const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const genre = require('../save/genre.json');
const movie = require('../save/movie.json');
const users = require('../save/users.json');

const app = express()

app.use(express.json())

const modules = ['Authorization','Movie','Genre','User']

app.get('/', (request, response) => {
    response.send('<h2>Backend Work<h2>')
})

modules.forEach(module => {
    app.use(`/${module}`, require(`./${module}`))
})


const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://back:back123@cluster0.7zlvpbl.mongodb.net/back?retryWrites=true&w=majority`,)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }


    console.log(genre);
    console.log(movie);
    console.log(users);

}


start();

module.exports = app
