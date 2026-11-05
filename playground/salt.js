const bcryptjs=require('bcryptjs');
async function secret(password)
{
    const salt=await bcryptjs.genSalt();
    console.log(salt);
console.log(salt.length);


const hash=await bcryptjs.hash(password,salt);
console.log(hash);
console.log(hash.length);
}
secret("sadineni1234")