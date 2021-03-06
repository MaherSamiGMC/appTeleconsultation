const mongoose=require('mongoose')
const {Schema}=mongoose
const bcrypt = require('bcryptjs');


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
    assistant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'assistant'
    },
    password:{
        type:String,
        required:true
    },
    role: { type: String, default: 'doctor' }
},
{ timestamps: true })

doctorSchema.methods.matchPassword=async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}

doctorSchema.pre('save',async function(){

    const salt=await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password,salt)
})

module.exports=mongoose.model('doctor',doctorSchema)