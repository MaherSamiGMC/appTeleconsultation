const jwt=require('jsonwebtoken')
const AsyncHandler= require('express-async-handler')
const doctor=require('../models/DoctorSchema')

const protectDoctor=AsyncHandler(async(req,res,next)=>{
    let token 

    if(req.headers.authorization){
        try {
            token=req.headers.authorization
            decoded=jwt.verify(token,process.env.JWT_TOKEN)
            req.doctor = await doctor.findById(decoded.id).select('-password')
                next()
        }catch (error) {
            console.error(error)
            res.json({message:"user not authorized, token failed"})
        }
    }if (!token){
        res.json({message:"user not authorized, no token provided"})
    }
})
module.exports=protectDoctor