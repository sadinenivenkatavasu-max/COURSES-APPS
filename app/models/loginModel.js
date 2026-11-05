const mongoose=require('mongoose');

//schema
const loginSchema=new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true}
})

//model

const login=mongoose.model('login',loginSchema);

module.exports=login;