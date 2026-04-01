const {createUser} = require("../../model/user/UserCRUD")
function signup(req, res){
    res.render("user/signup")
}

function post_signup(req, res){
    const {name, gender, age, contact, email, password} = req.body;
    createUser(name, gender, age, contact, email, password);
    res.send("Done")
}




module.exports.signup = signup;
module.exports.post_signup = post_signup