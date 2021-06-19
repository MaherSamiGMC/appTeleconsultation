const express=require('express')
const router=express.Router()
const {getAssistants,addNewAssistant,updateAssistant,deleteAssistant,getAssistant} = require('../controllers/AssistantControllers')

// URL : /api/assistant/
// GET Method 
// Private route
router.get('/',getAssistants)
// URL : /api/assistant/newAssistant
// POST Method 
// Private route
router.post('/newAssistant',addNewAssistant)
// URL : /api/assistant/:id
// GET Method 
// Private route
router.get('/:id',getAssistant)
// URL : /api/assistant/:id
// PUT Method 
// Private route
router.put('/:id',updateAssistant)
// URL : /api/assistant/:id
// DEL Method 
// Private route
router.delete('/:id',deleteAssistant)

module.exports=router