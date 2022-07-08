const mongoose =  require("mongoose");
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema({
    name:{
        type:String,
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
    
},{timestamps:true})

userSchema.methods.matchPassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password)
}

const User = mongoose.model("User",userSchema);
module.exports=User;