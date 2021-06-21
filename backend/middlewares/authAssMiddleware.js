const jwt=require('jsonwebtoken')
const AsyncHandler= require('express-async-handler')
const assistant=require('../models/AssistantSchema')

//protect middelware for patient route 
const protectAssistant=AsyncHandler(async(req,res,next)=>{
    let token 

    if(req.headers.authorization){
        try {
            token=req.headers.authorization
            decoded=jwt.verify(token,process.env.JWT_TOKEN)
            req.assistant = await assistant.findById(decoded.id).select('-password')
                next()
        }catch (error) {
            console.error(error)
            res.json({message:"user not authorized, token failed"})
        }
    }if (!token){
        res.json({message:"user not authorized, no token provided"})
    }
})
module.exports=protectAssistant