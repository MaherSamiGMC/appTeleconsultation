const asyncHandler = require('express-async-handler')
const doctor=require('../models/DoctorSchema')

//Find doctors
const getDoctors=asyncHandler(async(req,res)=>{
    const doctors=await doctor.find()
    res.json({message:'data loaded successfully',doctors})
})

const getDoctor=asyncHandler(async(req,res)=>{
    const getDoctor=await doctor.findById(req.params.id).populate("patients")
    res.json({message:'data loaded successfully',getDoctor})
})

const addNewDoctor=asyncHandler((async(req,res)=>{
    const newDoctor=new doctor({...req.body})
    await newDoctor.save()
    res.json({message:'data added successfully',newDoctor})
    
}))

const updateDoctor=asyncHandler((async(req,res)=>{
    let updateDoctor=await doctor.findByIdAndUpdate(req.params.id, { $set: {...req.body}})
    res.json({message:'data updated successfully',updateDoctor})
}))

const deleteDoctor=asyncHandler((async(req,res)=>{
    let deletedDoctor=await doctor.findByIdAndRemove(req.params.id)
    res.json({message:'data deleted successfully',deletedDoctor})
}))


module.exports={getDoctors,addNewDoctor,updateDoctor,deleteDoctor,getDoctor}