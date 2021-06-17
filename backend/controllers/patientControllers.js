const asyncHandler = require('express-async-handler')
const patient=require('../models/patientSchema')


const getPatients=asyncHandler(async(req,res)=>{
    const patients=await patient.find()
    res.json({message:'data loaded successfully',patients})
})

module.exports={getPatients}