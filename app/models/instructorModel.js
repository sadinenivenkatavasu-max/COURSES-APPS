const mongoose=require('mongoose');
const express=require('express');
//schema

const instructorSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
         type: String,
        required: true,
        unique: true
    },
    expertise: {
        type: String
    }

},{timestamps:true})

//model

const Instructor=mongoose.model('Instructor',instructorSchema);

module.exports=Instructor;




