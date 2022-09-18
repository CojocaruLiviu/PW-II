import express from "express";

const PORT = 3000

const app = express()

app.get('/', ( req, resp  ) =>{
resp.status(200).json('Server is working ')
})

app.use(express.json())



app.listen(PORT, () => console.log('Server start on port  '+PORT))