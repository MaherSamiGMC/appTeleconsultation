const express=require('express')
const router=express.Router()
const {getDoctors,addNewDoctor,updateDoctor,deleteDoctor,getDoctor,authDoctor} = require('../controllers/DoctorControllers')

// URL : /api/doctor/
// GET Method 
// Private route
router.get('/',getDoctors)
// URL : /api/doctor/newDoctor
// POST Method 
// Private route
router.post('/newDoctor',addNewDoctor)
// URL : /api/doctor/:id
// GET Method 
// Private route
router.get('/:id',getDoctor)
// URL : /api/doctor/:id
// PUT Method 
// Private route
router.put('/:id',updateDoctor)
// URL : /api/doctor/:id
// DEL Method 
// Private route
router.delete('/:id',deleteDoctor)
// URL : /api/doctor/login
// POST Method 
// public route
router.post('/login',authDoctor)

module.exports=router