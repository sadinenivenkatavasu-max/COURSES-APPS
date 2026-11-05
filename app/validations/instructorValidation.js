const express=require('express');
const joi=require('joi');

const instructorValidation=joi.object({
name:joi.string().min(1).max(10).required(),
email:joi.string().required(),
expertise:joi.string()
})

module.exports=instructorValidation;
