const express=require('express')
const app=express()
const cors = require('cors')
require('dotenv').config()
const connectDB= require('./config/connectDB')

app.use(express.json())
app.use(cors())

// database connection
connectDB()

const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`server running on port ${PORT}`) )

