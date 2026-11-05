const express=require('express');
const instructor=require('../models/instructorModel.js');
const instructorValidation=require('../validations/instructorValidation.js');
const instructorCltr={};

instructorCltr.create=async(req,res)=>
{
    try
    {

        const body=req.body;
        const{error,value}=instructorValidation.validate(body,{abortEarly:false})
        if(error)
        {
            res.json({error:error.message});
        }
const instruct=await instructor.create(value);
res.json(instruct);
console.log(value);
    }
catch(err)
{
    res.json({});
}
}
instructorCltr.read=async(req,res)=>
{
    try
    {
        const instruct=await instructor.find();
    res.json(instruct);
    }
    catch(err)
    {
        res.json({});
    }
}

instructorCltr.readOne = async(req, res) => {
    const id = req.params.id;
    try {
        const instruct = await instructor.findById(id);

        if (!instruct) {
            return res.json({});
        }
        return res.json(instruct);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
}


instructorCltr.deleteOne=async(req,res)=>
{
    const id=req.params.id;
    const body=req.body;
    try
    {
        const instruct=await instructor.findByIdAndDelete(id);
        if(!instruct)
        {
            res.json({});
        }
        res.json(instruct);
    }
    catch(err)
    {
        res.json({message:err.message});
    }
}


instructorCltr.updateOne=async(req,res)=>
{
    const id=req.params.id;
    const body=req.body;
    try
    {
const instruct=await instructor.findByIdAndUpdate(id,body);

if(!instruct)
{
 res.json({});
}
res.json(instruct);
    }
    catch(err)
    {
res.json({});
    }
}



module.exports=instructorCltr;