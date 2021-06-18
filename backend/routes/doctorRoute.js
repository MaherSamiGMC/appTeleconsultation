const express=require('express')
const router=express.Router()
const {getDoctors,addNewDoctor,updateDoctor,deleteDoctor,getDoctor} = require('../controllers/DoctorControllers')

router.get('/',getDoctors)
router.post('/newDoctor',addNewDoctor)
router.get('/:id',getDoctor)
router.put('/:id',updateDoctor)
router.delete('/:id',deleteDoctor)

module.exports=router