const express=require('express')
const router=express.Router()
const {getPatients,addNewPatient,updatePatient,deletePatient,getPatient,authPatient} = require('../controllers/patientControllers')
const protectPatient=require('../middlewares/authPatMiddleware')
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
router.get('/:id',protectPatient,getPatient) 
// URL : /api/patient/:id
// PUT Method 
// Private route
router.put('/:id',updatePatient)
// URL : /api/patient/:id
// DEL Method 
// Private route
router.delete('/:id',deletePatient)


// URL : /api/patient/login
// POST Method 
// public route
router.post('/login',authPatient)

module.exports=router