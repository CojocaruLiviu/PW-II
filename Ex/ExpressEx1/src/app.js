const express = require('express')
require('dotenv').config()
const app = express()

app.use(express.json())

const router = require("./routes/index");
app.use('/', router);

app.listen(process.env.SERVER_PORT, process.env.SERVER_URL, () => {
    console.log(`Example app listening on port ${process.env.SERVER_PORT}`)
})