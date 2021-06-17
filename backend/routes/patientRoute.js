const express=require('express')
const router=express.Router()
const {getPatients} = require('../controllers/patientControllers')

router.get('/',getPatients)

module.exports=router