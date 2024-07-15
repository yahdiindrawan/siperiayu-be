import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import authRouter from './router/authRouter.js'

dotenv.config()

const app = express()
const port = 3000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Message dari endpoint express"
    })
})

// Parent Router
app.use('/api/v1/auth', authRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//Connection DB
mongoose.connect(process.env.DATABASE, {

}).then(() => {
    console.log("Database connect")
})