const express=require('express');
const jsonwebtoken=require('jsonwebtoken');

const authenticationUser=(req,res,next)=>
{

const authHeader=req.headers.authorization;
const token = authHeader.split(' ')[1];
if(!token)
{
    res.json({errors:'token not provided'});
}
console.log(token);
const verify=jsonwebtoken.verify(token,process.env.JWT_SECRET);
req.userId=verify.userId;

    next();
}

module.exports=authenticationUser;