const Users = require("./userSchema");

async function createUser(name, email, contact, hashedPassword, profile, gender, token){
    await Users.create({
        name:name,
        email:email,
        contact:contact,
        password:hashedPassword,
        profile:profile,
        gender:gender,
        token:token
    })
}

async function read(key, value){
    let user = await Users.findOne({[key]:value})    
    return user;
}

module.exports.createUser = createUser;
module.exports.read = read;