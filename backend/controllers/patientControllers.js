const asyncHandler = require('express-async-handler')
const patient=require('../models/patientSchema')


const getPatients=asyncHandler(async(req,res)=>{
    const patients=await patient.find()
    res.json({message:'data loaded successfully',patients})
})

const addNewPatient=asyncHandler((async(req,res)=>{
    const newPatient=new patient({...req.body})
    await newPatient.save()
    res.json({message:'data added successfully',newPatient})
    
}))

module.exports={getPatients,addNewPatient}