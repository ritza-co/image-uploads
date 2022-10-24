const express = require('express');
const app = express();
const cors = require( 'cors'); 
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: `${__dirname}/uploads/`,
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}${path.extname(file.originalname)}`;
        cb(null, fileName);
    }
});

const uploadImage = multer({ storage }).single('photo');

app.use(cors());
app.use(express. static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.post('/image', uploadImage, (req, res) => {
    console.log(req.file);
    if (req.file) return res.json({msg: 'File uploaded successfully'});

    res.send('Error uploading file');
});

const port = process.env.PORT || 3000;

app.listen(port, () => { 
    console.log("listening on port " + port); 
});
