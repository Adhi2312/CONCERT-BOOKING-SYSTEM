const express = require('express');
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');

require("./config.js");
const multer = require('multer');
const path = require("path");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT ||5000;
app.get('/', (req, res) => {
    res.send("Welcome to our Todo App");
});
const staticDir = path.join(__dirname, 'public');

// Serve static files from the 'public' directory
app.use(express.static(staticDir));

const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

const upload = multer({ storage: storage });;

const routes = require('./route')(upload);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.use(routes); // Apply the routes middleware
