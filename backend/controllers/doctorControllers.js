const asyncHandler = require('express-async-handler')
const doctor=require('../models/DoctorSchema')

//Find doctors
const getDoctors=asyncHandler(async(req,res)=>{
    const doctors=await doctor.find()
    res.json({message:'doctors loaded successfully',doctors})
})
//Find doctor by id
const getDoctor=asyncHandler(async(req,res)=>{
    const getDoctor=await doctor.findById(req.params.id).populate("patients").populate("assistant")
    res.json({message:'Doctor data loaded successfully',getDoctor})
})
//Add new doctor
const addNewDoctor=asyncHandler((async(req,res)=>{
    const newDoctor=new doctor({...req.body})
    await newDoctor.save()
    res.json({message:'new doctor added successfully',newDoctor})
    
}))
//update doctor's data 
const updateDoctor=asyncHandler((async(req,res)=>{
    let updateDoctor=await doctor.findByIdAndUpdate(req.params.id, { $set: {...req.body}})
    res.json({message:"Doctor's data updated successfully",updateDoctor})
}))
//delete doctor
const deleteDoctor=asyncHandler((async(req,res)=>{
    let deletedDoctor=await doctor.findByIdAndRemove(req.params.id)
    res.json({message:'Doctor deleted successfully',deletedDoctor})
}))


module.exports={getDoctors,addNewDoctor,updateDoctor,deleteDoctor,getDoctor}