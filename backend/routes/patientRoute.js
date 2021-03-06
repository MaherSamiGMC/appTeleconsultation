const express=require('express')
const router=express.Router()
const {updateMessage,addNewMessage,getPatients,addNewPatient,updatePatient,deletePatient,getPatient,authPatient, addNewAppointment, updateAppointment, deleteAppointment} = require('../controllers/patientControllers')
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
// URL : /api/patient/:id/newAppointment
// PUT Method 
// Private route
router.put('/:id/newAppointment',addNewAppointment)
// URL : /api/patient/:id/updateAppointment
// PUT Method 
// Private route
router.put('/:id/updateAppointment',updateAppointment)
// URL : /api/patient/:id/deleteAppointment
// PUT Method 
// Private route
router.put('/:id/deleteAppointment',deleteAppointment)
// URL : /api/patient/:id/newMessage
// PUT Method 
// Private route
router.put('/:id/newMessage',addNewMessage)
// URL : /api/patient/:id/newMessage
// PUT Method 
// Private route
router.put('/:id/updateMessage',updateMessage)
// URL : /api/patient/login
// POST Method 
// public route
router.post('/login',authPatient)

module.exports=router