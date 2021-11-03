'use strict';

// allows use of env file
require('dotenv').config();

// imported dependancies
const express = require('express');
const cors = require('cors');

// json file
const weather = require('./data/weather.json');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Working on it, sir. This is a prototype. -J.A.R.V.I.S.');
});


// turns server on
app.listen(3001, () => console.log(`Listening on Port ${PORT}`));