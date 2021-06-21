const express=require('express')
const app=express()
const cors = require('cors')
require('dotenv').config()
const connectDB= require('./config/connectDB')

app.use(express.json())
app.use(cors())

// database connection
connectDB()

//user routes
app.use('/api/patient/',require('./routes/patientRoute'))
app.use('/api/assistant/',require('./routes/assistantRoute'))
app.use('/api/doctor/',require('./routes/doctorRoute'))

// port
const PORT=process.env.PORT || 5000

app.listen(PORT, console.log(`server running on port ${PORT}`) )

