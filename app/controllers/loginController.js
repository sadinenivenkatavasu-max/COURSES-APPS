const express=require('express');
const loginValidation=require('../validations/loginValidation.js');
const login=require('../models/loginModel.js');
const Registration=require('../models/registrationModel.js');
const jsonwebtoken=require('jsonwebtoken');
const bcryptjs=require('bcryptjs');
const loginCltr={};
loginCltr.create=async(req,res)=>
{
    try
    {
         const body=req.body;
         const{error,value}=loginValidation.validate(body,{abortEarly:false});
if(error)
{
    res.json({})
}
const user=await Registration.findOne({email:value.email})
if(!user)
{
res.json('user or email not found');
}
const compare=await bcryptjs.compare(value.password,user.password);
  if (!compare) {
    return res.json('incorrect email/password');
  }

const tokenData={userId:user._id,email:user.email};
console.log(tokenData);
const token=jsonwebtoken.sign(tokenData,process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE});
res.json(token);
}
   catch(err)
    {
        res.json(err);
    }
}
module.exports=loginCltr;

//res.json('login successfully');