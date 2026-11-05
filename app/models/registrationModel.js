const mongoose=require('mongoose');
const express=require('express');
//schema
const registrationSchema=new mongoose.Schema({
   name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true}
})


//model
const Registration=mongoose.model('Registration',registrationSchema);

module.exports=Registration;