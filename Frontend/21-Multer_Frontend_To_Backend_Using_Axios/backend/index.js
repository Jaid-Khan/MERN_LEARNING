const express = require('express');
const multer = require('multer');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    }, filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

const upload = multer({storage: storage});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/signup', upload.single('profile'), (req, res) => {
    res.send('File uploaded successfully');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});