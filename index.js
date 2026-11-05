const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');
const dotenv=require('dotenv');
const authenticationUser=require('./app/middlewares/authenticationLogin.js');
const app=express();
require('dotenv').config();
const port=process.env.PORT;


app.use(express.json());
app.use(cors());


const configureDB=require('./config/db.js');
configureDB();

//registration
const registrationCltr=require('./app/controllers/registrationController.js');
const registrationModel=require('./app/models/registrationModel.js');
//login
const loginCltr=require('./app/controllers/loginController.js');
const loginModel=require('./app/models/loginModel.js');

//instructor
const instructorCltr=require('./app/controllers/instructorController.js');
const instructorModel=require('./app/models/instructorModel.js');
//course
const courseCltr=require('./app/controllers/courseController.js');
const courseModel=require('./app/models/courseModel.js');
//model
//registration 
app.post('/registrations',registrationCltr.create);
//login 
app.post('/logins',loginCltr.create);

//schema
//api create
app.post('/instructors',authenticationUser,instructorCltr.create);
//read
app.get('/instructors',authenticationUser,instructorCltr.read);
//readid
app.get('/instructors/:id',authenticationUser,instructorCltr.readOne);
//delete
app.delete('/instructors/:id',authenticationUser,instructorCltr.deleteOne);
//update
app.put('/instructors/:id',authenticationUser,instructorCltr.updateOne);


//course 
app.post('/courses',courseCltr.create);
app.get('/courses',courseCltr.read);

app.listen(port,()=>
{
    console.log('server running on the port',port);
})