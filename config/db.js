const mongoose=require('mongoose');
const dotenv=require('dotenv');
async function configureDB()
{
    try
    {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb and server connected');
    }
    catch(err)
    {
        console.log(err.message);
    }
}

module.exports = configureDB;