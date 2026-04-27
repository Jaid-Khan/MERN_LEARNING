const { encrypt } = require("../../essentials/bcrypt");
const Admin = require("./schema");

async function createAdmin() {
    Admin.find({}).then(async (all_admins)=>{
        if(all_admins.length == 0){
            const hash = await encrypt("admin123")
            const newAdmin = await Admin.create({
                name:"admin",
                contact:"9876543210",
                email:"admin@gmail.com",
                password: hash,
            })
        }
    })
}

module.exports = createAdmin;