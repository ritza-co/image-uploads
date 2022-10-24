const express = require('express');
const app = express();
const cors = require( 'cors'); 
const path = require('path');

app.use(cors());
app.use(express. static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});

const port = process.env.PORT || 3000;

app.listen(port, () => { 
    console.log("listening on port" + port); 
});
