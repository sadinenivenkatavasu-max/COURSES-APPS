const registrationValidation = require('../validations/registrationValidation.js');
const Registration = require('../models/registrationModel.js');
const bcryptjs = require('bcryptjs');

const registrationCltr = {};

registrationCltr.create = async (req, res) => {
   try
   {
const body=req.body;
const{error,value}=registrationValidation.validate(body,{abortEarly:false})
if(error)
{
    res.json({errors:error.message});
}
const salt=await bcryptjs.genSalt();
//console.log(salt);
const hash=await bcryptjs.hash(value.password,salt);
value.password=hash;
const regist=await Registration.create(value);
res.json(regist);
   }
   catch(err)
   {
    res.json(err);

   }
};

module.exports = registrationCltr;


 // const salt = await bcryptjs.genSalt();
        //const hash = await bcryptjs.hash(value.password, salt);
       // value.password=hash;