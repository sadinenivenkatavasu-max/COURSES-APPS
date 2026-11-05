const express=require('express');
const joi=require('joi');


const loginValidation=joi.object({
    email:joi.string().required(),
    password:joi.string().required()

})

module.exports=loginValidation;