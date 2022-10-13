const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())


const modules = ['Authorization','Movie','Genre','User']


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
