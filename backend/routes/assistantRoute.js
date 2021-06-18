const express=require('express')
const router=express.Router()
const {getAssistants,addNewAssistant,updateAssistant,deleteAssistant} = require('../controllers/AssistantControllers')

router.get('/',getAssistants)
router.post('/newAssistant',addNewAssistant)
router.put('/:id',updateAssistant)
router.delete('/:id',deleteAssistant)

module.exports=router