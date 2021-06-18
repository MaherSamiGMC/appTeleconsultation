const asyncHandler = require('express-async-handler')
const assistant=require('../models/AssistantSchema')

//Find assistants
const getAssistants=asyncHandler(async(req,res)=>{
    const assistants=await assistant.find().populate("affiliateDoctor")
    res.json({message:'data loaded successfully',assistants})
})

const addNewAssistant=asyncHandler((async(req,res)=>{
    const newAssistant=new assistant({...req.body})
    await newAssistant.save()
    res.json({message:'data added successfully',newAssistant})
    
}))

const updateAssistant=asyncHandler((async(req,res)=>{
    let updateAssistant=await assistant.findByIdAndUpdate(req.params.id, { $set: {...req.body}})
    res.json({message:'data updated successfully',updateAssistant})
}))

const deleteAssistant=asyncHandler((async(req,res)=>{
    let deletedAssistant=await assistant.findByIdAndRemove(req.params.id)
    res.json({message:'data deleted successfully',deletedAssistant})
}))


module.exports={getAssistants,addNewAssistant,updateAssistant,deleteAssistant}