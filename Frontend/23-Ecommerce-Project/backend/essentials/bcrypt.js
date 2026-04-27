const bcrypt = require("bcrypt"); 

module.exports.encrypt = async function (password){
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

module.exports.compare = async function(inputPassword, hashedPassword){
    const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
    return isMatch;
}