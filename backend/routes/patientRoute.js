const express=require('express')
const router=express.Router()
const {getPatients,addNewPatient} = require('../controllers/patientControllers')

router.get('/',getPatients)
router.post('/newpatient',addNewPatient)

module.exports=router