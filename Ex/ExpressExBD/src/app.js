const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const router = require("./api/routes/index");

app.use(express.json())
app.use('/', router);

mongoose.connect(`mongodb+srv://qwerty:qwerty123@cluster0.b6pb9.mongodb.net/auth_roles?retryWrites=true&w=majority`);
app.listen(process.env.SERVER_PORT, process.env.SERVER_URL, () => {
  console.log(`Example app listening on port ${process.env.SERVER_PORT}`)
  
})

require('./database').init()

