const express=require('express')
const app=express()
const server=require('http').createServer(app)
const cors = require('cors')
require('dotenv').config()
const connectDB= require('./config/connectDB')
const { disconnect } = require('process')
const io=require('socket.io')(server,{
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})



app.use(express.json())
app.use(cors())

// database connection
connectDB()

//user routes
app.use('/api/patient/',require('./routes/patientRoute'))
app.use('/api/assistant/',require('./routes/assistantRoute'))
app.use('/api/doctor/',require('./routes/doctorRoute'))

// port 5000
const PORT=process.env.PORT || 5000

io.on('connection',(socket)=>{
    socket.emit('me',socket.id)
    socket.on('disconnect',()=>{
        socket.broadcast.emit('callended')
    })
    socket.on('calluser',({userToCall,signalData,from,name})=>{
        io.to(userToCall).emit("calluser",{signal:signalData,from,name})
    })
    socket.on('answercall',(data)=>{
        io.to(data.to).emit("callaccepted",data.signal)
    })
})

server.listen(PORT, console.log(`server running on port ${PORT}`) )

