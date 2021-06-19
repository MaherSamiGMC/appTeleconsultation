const asyncHandler = require('express-async-handler')
const patient=require('../models/patientSchema')
const doctor=require('../models/DoctorSchema')

//Find patients
const getPatients=asyncHandler(async(req,res)=>{
    const patients=await patient.find()
    res.json({message:'patients loaded successfully',patients})
})

//Find Patient by id
const getPatient=asyncHandler(async(req,res)=>{
    const getPatient=await patient.findById(req.params.id)
    res.json({message:'Patient data loaded successfully',getPatient})
})

//Add new Patient
const addNewPatient=asyncHandler((async(req,res)=>{
    const newPatient=new patient({...req.body})
    await newPatient.save()
    // the new patient ID will be added to the array of patients in doctor's document
    await doctor.findByIdAndUpdate(req.body.affiliateDoctor,{ $push: {"patients":newPatient._id}})
    res.json({message:'new patient added successfully',newPatient})
    
}))
//update Patient's data 
const updatePatient=asyncHandler((async(req,res)=>{
    let updatePatient=await patient.findByIdAndUpdate(req.params.id, { $set: {...req.body}})
    res.json({message:' Patient data updated successfully',updatePatient})
}))

//delete Patient
const deletePatient=asyncHandler((async(req,res)=>{
    let deletedPatient=await patient.findByIdAndRemove(req.params.id)
    console.log(deletedPatient.affiliateDoctor)
    // the patient will be deleted from the array of patients in doctor's document
    await doctor.findByIdAndUpdate(deletedPatient.affiliateDoctor,{ $pull: {"patients":deletedPatient._id}})
    res.json({message:'Patient deleted successfully',deletedPatient})
}))



module.exports={getPatients,addNewPatient,updatePatient,deletePatient,getPatient}