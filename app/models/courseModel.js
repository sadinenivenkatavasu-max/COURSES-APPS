const mongoose=require('mongoose');
const express=require('express');
const instructor=require('./instructorModel.js');

const courseSchema=new mongoose.Schema({
    name: {type:String,required:true},
    duration: {type:String,required:true},

    instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'instructor'
    }
})

const Course=mongoose.model('Course',courseSchema);
module.exports=Course;