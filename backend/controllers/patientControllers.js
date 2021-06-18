const asyncHandler = require('express-async-handler')
const patient=require('../models/patientSchema')
const doctor=require('../models/DoctorSchema')

//Find patients
const getPatients=asyncHandler(async(req,res)=>{
    const patients=await patient.find()
    res.json({message:'data loaded successfully',patients})
})

const addNewPatient=asyncHandler((async(req,res)=>{
    const newPatient=new patient({...req.body})
    await newPatient.save()
    // await doctor.findByIdAndUpdate(req.body.affiliateDoctor,{ $set: {"patients":newPatient_id}})
    res.json({message:'data added successfully',newPatient})
    
}))

const updatePatient=asyncHandler((async(req,res)=>{
    let updatePatient=await patient.findByIdAndUpdate(req.params.id, { $set: {...req.body}})
    res.json({message:'data updated successfully',updatePatient})
}))

const deletePatient=asyncHandler((async(req,res)=>{
    let deletedPatient=await patient.findByIdAndRemove(req.params.id)
    res.json({message:'data deleted successfully',deletedPatient})
}))


module.exports={getPatients,addNewPatient,updatePatient,deletePatient}