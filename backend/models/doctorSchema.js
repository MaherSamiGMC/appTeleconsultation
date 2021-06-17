const mongoose=require('mongoose')
const {Schema}=mongoose

const doctorSchema=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    medicalSpeciality:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('doctor',doctorSchema)