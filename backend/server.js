const express=require('express')
const app=express()
const server=require('http').createServer(app)
const cors = require('cors')
require('dotenv').config()
const connectDB= require('./config/connectDB')
const { disconnect } = require('process')
const nodemailer = require("nodemailer");
const SMTPTransport = require('nodemailer/lib/smtp-transport')


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
app.post('/api/mail',(req,res)=>{
	let data=req.body
	console.log("data",data)
	let transporter = nodemailer.createTransport({
		service: "hotmail",
		auth: {
		  user: 'neardoctortunisie@outlook.fr', 
		  pass: 'uygngvngvkgnkg123456@@'
		},
	  });
	let mailOptions={
		from:"neardoctortunisie@outlook.fr",
		to:data.sender,
		subject:"Vos identifiants",
		html:`
		Bonjour ! vous trouverez ci-dessous votre mot de passe pour accéder à la plateforme Near Doctor ©  :
		Mot de passe :${data.password}    
		`
	}
	transporter.sendMail(mailOptions,(error,response)=>{
		error? res.send(error):res.send('success')
	})
	transporter.close()
})

// port 5000
const PORT=process.env.PORT || 5000

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

server.listen(PORT, console.log(`server running on port ${PORT}`) )

