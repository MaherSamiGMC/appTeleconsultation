const asyncHandler = require('express-async-handler')
const patient=require('../models/patientSchema')
const doctor=require('../models/DoctorSchema')
const generateToken=require('../utils/generateToken')


//Find patients
const getPatients=asyncHandler(async(req,res)=>{
    const patients=await patient.find().select('-password')
    res.json({message:'patients loaded successfully',patients})
})

//Find Patient by id
const getPatient=asyncHandler(async(req,res)=>{
    const getPatient=await patient.findById(req.params.id).select('-password')
    res.json({message:'Patient data loaded successfully',getPatient})
})

//Add new Patient
const addNewPatient=asyncHandler((async(req,res)=>{
    const userExists= await patient.findOne({"email":req.body.email})
    if (userExists){
        res.status(400).json({error:"patient already exists"})
    } else {
        const newPatient=new patient({...req.body})
        await newPatient.save()
        // the new patient ID will be added to the array of patients in doctor's document
        await doctor.findByIdAndUpdate(req.body.affiliateDoctor,{ $push: {"patients":newPatient._id}})
        res.json({message:'new patient added successfully',newPatient})
    }

    
}))
//update Patient's data 
const updatePatient=asyncHandler((async(req,res)=>{
    if(req.body.password){
        const salt=await bcrypt.genSalt(10)
        req.body.password= await bcrypt.hash(req.body.password,salt)
    }
    let updatePatient=await patient.findByIdAndUpdate(req.params.id, { $set: {...req.body}}).select('-password')
    res.json({message:'Patient data updated successfully',updatePatient})
}))

//delete Patient
const deletePatient=asyncHandler((async(req,res)=>{
    let deletedPatient=await patient.findByIdAndRemove(req.params.id).select('-password')
    console.log(deletedPatient.affiliateDoctor)
    // the patient will be deleted from the array of patients in doctor's document
    await doctor.findByIdAndUpdate(deletedPatient.affiliateDoctor,{ $pull: {"patients":deletedPatient._id}})
    res.json({message:'Patient deleted successfully',deletedPatient})
}))

//authentification Patient

const authPatient=asyncHandler((async(req,res)=>{

    const authPatient=await patient.findOne({"email":req.body.email})
    if (authPatient && (await authPatient.matchPassword(req.body.password))){
        res.json({message:"patient authenticated successfully",authPatient:{...authPatient.toObject(),token:generateToken(authPatient._id)}})
    }else {
        res.status(401).json({error:"Invalid email or password"})
    }
}))

const addNewAppointment=asyncHandler((async(req,res)=>{
    const updatePatient=await patient.findByIdAndUpdate(req.params.id,{ $push: {"appointments":req.body}})
    res.json({message:'appointment added successfully',updatePatient})
}))

const updateAppointment=asyncHandler((async(req,res)=>{
    const updatePatient=await patient.findOneAndUpdate({_id:req.params.id,"appointments._id":req.body._id},{ $set: {"appointments.$":req.body}})
    res.json({message:'appointment updated successfully',updatePatient})
}))

const deleteAppointment=asyncHandler((async(req,res)=>{
    // console.log(req.body)
    const deletedPatient=await patient.findByIdAndUpdate({"_id":req.params.id},{ $pull: {"appointments":{"id":req.body.deleted}}})
    res.json({message:'appointment deleted successfully',deletedPatient})
}))

const addNewMessage=asyncHandler((async(req,res)=>{
    const addNewMessage=await patient.findByIdAndUpdate(req.params.id,{ $push: {"messages":req.body}})
    res.json({message:'New Message added successfully',addNewMessage})
}))
const updateMessage=asyncHandler((async(req,res)=>{
    console.log(req.params.id)
    const updateMessage=await patient.findOneAndUpdate({_id:req.params.id,"messages._id":req.body._id},{ $set: {"messages.$":req.body}})
    // console.log('updateMessage',updateMessage)
    res.json({message:'Message updated successfully',updateMessage})
}))
module.exports={getPatients,addNewPatient,updatePatient,deletePatient,getPatient,authPatient,addNewAppointment,updateAppointment,deleteAppointment,addNewMessage,updateMessage}