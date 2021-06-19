const express=require('express')
const router=express.Router()
const {getPatients,addNewPatient,updatePatient,deletePatient,getPatient} = require('../controllers/patientControllers')

// URL : /api/patient/
// GET Method 
// Private route
router.get('/',getPatients)
// URL : /api/patient/newpatient
// POST Method 
// Private route
router.post('/newpatient',addNewPatient)
// URL : /api/patient/:id
// GET Method 
// Private route
router.get('/:id',getPatient)
// URL : /api/patient/:id
// PUT Method 
// Private route
router.put('/:id',updatePatient)
// URL : /api/patient/:id
// DEL Method 
// Private route
router.delete('/:id',deletePatient)

module.exports=router