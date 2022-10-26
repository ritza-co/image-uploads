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
    // return image name
    if (req.file) return res.json({msg: req.file.filename});

    res.send('Error uploading file');
});

// have the uploaded image files available at localhost:3000/uploads/<filename>
app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 3000;

app.listen(port, () => { 
    console.log("listening on port " + port); 
});
