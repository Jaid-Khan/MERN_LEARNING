const { read } = require("../models/user/userCrud");

module.exports = async function checkToken(req, res) {
  if (req.cookies.token == undefined) {
    res.send({ res: false });
  } else {
    let user = await read("token", req.cookies.token);
    if (user != undefined) {
      res.send({ res: true });
    } else {
      res.send({ res: false });
    }
  }
};
