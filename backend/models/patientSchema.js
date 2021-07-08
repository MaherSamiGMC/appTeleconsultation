const mongoose=require('mongoose')
const {Schema}=mongoose
const bcrypt = require('bcryptjs');

const messageSchema=new Schema({
    question:String,
    response:String,
    questionDate:{ type: Date},
    ResponseDate:{ type: Date},


})

const appointmentSchema=new Schema({
    allDay:Boolean,
    endDate:{ type: Date},
    startDate:{ type: Date},
    notes:String,
    title:String,
    patient:String,
    id:String

})

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
    },
    socketId:{
        type:String
    },
    role: { type: String, default: 'patient' },
    appointments:[appointmentSchema],
    messages:[messageSchema]
},
{ timestamps: true })

patientSchema.methods.matchPassword=async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}

patientSchema.pre('save',async function(){

    const salt=await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password,salt)
})


module.exports=mongoose.model('patient',patientSchema)