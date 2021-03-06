const asyncHandler = require('express-async-handler')
const assistant=require('../models/AssistantSchema')
const doctor=require('../models/DoctorSchema')
const generateToken=require('../utils/generateToken')
const bcrypt = require('bcryptjs')


//Find assistants
const getAssistants=asyncHandler(async(req,res)=>{
    const assistants=await assistant.find().populate("affiliateDoctor").select('-password')
    res.json({message:'assistants loaded successfully',assistants})
})

//Find assistant by id
const getAssistant=asyncHandler(async(req,res)=>{
    const getAssistant=await assistant.findById(req.params.id).select('-password')
    res.json({message:'Assistant data loaded successfully',getAssistant})
})

//Add new Assistant
const addNewAssistant=asyncHandler((async(req,res)=>{
    const userExists= await assistant.findOne({"email":req.body.email})
    if (userExists){
        res.status(400).json({error:"assistant already exists"})
    } else {
    const newAssistant=new assistant({...req.body})
    await newAssistant.save()
    // the new Assistant ID will be added to the object assistant in doctor's document
    await doctor.findByIdAndUpdate(req.body.affiliateDoctor,{ $set: {"assistant":newAssistant._id}})
    res.json({message:'new assistant added successfully',newAssistant})
}
    
}))
//update Assistant's data 
const updateAssistant=asyncHandler((async(req,res)=>{
    if(req.body.password){
        const salt=await bcrypt.genSalt(10)
        req.body.password= await bcrypt.hash(req.body.password,salt)
    }
    let updateAssistant=await assistant.findByIdAndUpdate(req.params.id, { $set: {...req.body}}).select('-password')
    res.json({message:'Assistant updated successfully',updateAssistant})
}))

//delete Assistant
const deleteAssistant=asyncHandler((async(req,res)=>{
    let deletedAssistant=await assistant.findByIdAndRemove(req.params.id).select('-password')
    // the Assistant will be deleted from the object Assistant in doctor's document
    // await doctor.findByIdAndUpdate(deletedAssistant.affiliateDoctor,{ $unset : {"assistant":deletedAssistant._id}})
    res.json({message:'Assistant deleted successfully',deletedAssistant})
}))

//authentification Assistant

const authAssistant=asyncHandler((async(req,res)=>{

    const authAssistant=await assistant.findOne({"email":req.body.email})
    if (authAssistant && (await authAssistant.matchPassword(req.body.password))){
        res.json({message:"Assistant authenticated successfully",authAssistant:{...authAssistant.toObject(),token:generateToken(authAssistant._id)}})
    }else {
        res.status(401).json({error:"Invalid email or password"})
    }
}))


module.exports={getAssistants,addNewAssistant,updateAssistant,deleteAssistant,getAssistant,authAssistant}