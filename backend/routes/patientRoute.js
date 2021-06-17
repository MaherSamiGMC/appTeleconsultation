const express=require('express')
const router=express.Router()
const {getPatients,addNewPatient,updatePatient,deletePatient} = require('../controllers/patientControllers')

router.get('/',getPatients)
router.post('/newpatient',addNewPatient)
router.put('/:id',updatePatient)
router.delete('/:id',deletePatient)

module.exports=router