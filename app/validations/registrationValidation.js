const express=require('express');
const mongoose=require('mongoose');
const joi=require('joi');

const registrationValidation=joi.object({
    name:joi.string().min(1).max(10).required(),
    email:joi.string().required(),
   password:joi.string().required(),
})

module.exports=registrationValidation;

