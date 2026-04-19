const multer = require("multer");

// multer config
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/") //folder
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + "-" + file.originalname)
    }
})

// multer instance 
const upload = multer({storage}) 

module.exports = upload