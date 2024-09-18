const mongoose = require('mongoose');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
require('dotenv').config();

const BlogPost = require('./models/BlogPost');

const app = express();
const dbConnectionURI = process.env.MONGO_URI;


// connect to mongodb
mongoose.connect(dbConnectionURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
