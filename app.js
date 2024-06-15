import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('SIPERI-AYU BE')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//Connection DB
mongoose.connect(process.env.DATABASE, {

}).then(() => {
    console.log("Database connect")
})