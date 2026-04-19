const {read} = require("../models/user/userCrud");
const bcrypt = require("bcrypt");


async function postLogin(req, res){
    const {contact , password} = req.body;
    let user = await read("contact",contact);
    if(user == null){
        return res.send({
            res:false,
            alert:"User Not Found"
        })
    }else{
       const compare = await bcrypt.compare(password, user.password);
       if(compare == true){
        res.cookie("token", user.token)
        return res.send("Logged In Successfully")
       }else{
        return res.redirect("/login")
       }
    }
}

module.exports = postLogin;