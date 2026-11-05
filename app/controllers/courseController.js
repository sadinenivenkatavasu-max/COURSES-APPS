const course=require('../models/courseModel.js');
const express=require('express');
const courseCltr={};

courseCltr.create=async(req,res)=>
{
try
{
    const body=req.body;
    const cour=await course.create(body);
    res.json(cour);
}
catch(err)
{
    res.json({});
}
}
courseCltr.read=async(req,res)=>
{
    try{
        const cour=await course.find();
        res.json(cour);
    }
    catch(err)
    {
        res.json({});

    }
}


module.exports=courseCltr;