const mongoose=require('mongoose')
const {Schema}=mongoose
const bcrypt = require('bcryptjs');


const assistantSchema=new Schema({
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
    password:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String
    }
},
{ timestamps: true })

assistantSchema.methods.matchPassword=async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}

assistantSchema.pre('save',async function(){

    const salt=await bcrypt.genSalt(10)
    this.password= await bcrypt.hash(this.password,salt)
})

module.exports=mongoose.model('assistant',assistantSchema)