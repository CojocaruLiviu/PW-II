const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const MovieRouter = require('./MovieRouter')
const PORT = process.env.PORT || 3000
 
const app = express()
// const modules = ['authRouter','MovieRouter']

// modules.forEach(module => {
//     app.use(`/${module}`, require(`./${module}`))
// })
app.use(express.json())
app.use('/authRouter',authRouter);
app.use('/MovieRouter',MovieRouter);


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
