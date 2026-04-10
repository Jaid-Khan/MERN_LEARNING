const Users = require("./userSchema");

async function createUser(name, email, contact, password, profile, gender){
    await Users.create({
        name:name,
        email:email,
        contact:contact,
        password:password,
        profile:profile,
        gender:gender
    })
}

module.exports.createUser = createUser;