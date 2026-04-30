function checkToken(req, res){
    if(req.cookies.toke == undefined){
        res.send({res:false})
    }else{
        console.log("Cookie");
        res.send({res:true})
    }

}


module.exports = checkToken;