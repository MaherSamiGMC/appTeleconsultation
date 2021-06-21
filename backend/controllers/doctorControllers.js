const asyncHandler = require('express-async-handler')
const doctor=require('../models/DoctorSchema')
const generateToken=require('../utils/generateToken')
const bcrypt = require('bcryptjs')


//Find doctors
const getDoctors=asyncHandler(async(req,res)=>{
    const doctors=await doctor.find().select('-password')
    res.json({message:'doctors loaded successfully',doctors})
})
//Find doctor by id
const getDoctor=asyncHandler(async(req,res)=>{
    const getDoctor=await doctor.findById(req.params.id).populate("patients").populate("assistant").select('-password')
    res.json({message:'Doctor data loaded successfully',getDoctor})
})
//Add new doctor
const addNewDoctor=asyncHandler((async(req,res)=>{
    const userExists= await doctor.findOne({"email":req.body.email})
    if (userExists){
        res.status(400).json({error:"doctor already exists"})
    } else {
    const newDoctor=new doctor({...req.body})
    await newDoctor.save()
    res.json({message:'new doctor added successfully',newDoctor})
    }
    
}))
//update doctor's data 
const updateDoctor=asyncHandler((async(req,res)=>{

    if(req.body.password){
        const salt=await bcrypt.genSalt(10)
        req.body.password= await bcrypt.hash(req.body.password,salt)
    }
    let updateDoctor=await doctor.findByIdAndUpdate(req.params.id, { $set: {...req.body}}).select('-password')
    res.json({message:"Doctor's data updated successfully",updateDoctor})
}))
//delete doctor
const deleteDoctor=asyncHandler((async(req,res)=>{
    let deletedDoctor=await doctor.findByIdAndRemove(req.params.id).select('-password')
    res.json({message:'Doctor deleted successfully',deletedDoctor})
}))

//authentification Doctor

const authDoctor=asyncHandler((async(req,res)=>{

    const authDoctor=await doctor.findOne({"email":req.body.email})
    if (authDoctor && (await authDoctor.matchPassword(req.body.password))){
        res.json({message:"Doctor authenticated successfully",authDoctor:{...authDoctor.toObject(),token:generateToken(authDoctor._id)}})
    }else {
        res.json({error:"Invalid email or password"})
    }
}))


module.exports={getDoctors,addNewDoctor,updateDoctor,deleteDoctor,getDoctor,authDoctor}