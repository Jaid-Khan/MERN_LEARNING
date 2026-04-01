const Users = require("./UserSchema");

async function createUser(name, gender, age, contact, email, password){
    try {
        await Users.create({
            name:name,
            gender:gender,
            age:age,
            contact:contact,
            email:email,
            password:password,
        })
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

function read(){

}


function update(){

}


function delete_(){

}


module.exports.createUser = createUser;