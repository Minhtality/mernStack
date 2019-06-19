const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const items = require('./routes/api/items');
const app = express();

//bring in body parser

app.use(bodyParser.json());

//bring DB config
const db = require('./config/keys').mongoURI;

//connect to DB
mongoose
    .connect(db,{useNewUrlParser:true})
    .then(() => console.log('Mongodb connected'))
    .catch(err => console.log(err))

app.use('/api/items',items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));