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
    imageUrl:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    medicalSpeciality:{
        type:String,
        required:true
    },
    patients:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'patient'
    }],
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('doctor',doctorSchema)