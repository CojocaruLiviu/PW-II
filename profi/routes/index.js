const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const MovieRouter = require('./MovieRouter')
const GenreRouter = require('./GenreRouter')
const UserRouter = require('./UserRouter')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
// app.use('/authRouter',authRouter);
// app.use('/MovieRouter',MovieRouter);
// app.use('/GenreRouter',GenreRouter);
// app.use('/UserRouter',UserRouter);




const modules = ['authRouter','MovieRouter','GenreRouter','UserRouter']



modules.forEach(module => {
    app.use(`/${module}`, require(`./${module}`))
})


const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://back:back123@cluster0.7zlvpbl.mongodb.net/back?retryWrites=true&w=majority`)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}



start()

module.exports = app
