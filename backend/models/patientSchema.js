const mongoose=require('mongoose')
const {Schema}=mongoose

const patientSchema=new Schema({
    affiliateDoctor:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'doctor'
    },
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
    dateOfBirth:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('patient',patientSchema)