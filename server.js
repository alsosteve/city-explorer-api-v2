'use strict';

// allows use of env file
require('dotenv').config();

// imported dependancies
const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3001;

const handleGetWeather=require("./components/weather.js");
const handleGetMovies=require("./components/movies.js");

//middleware
app.use(cors());

app.get('/', (req, res) => {res.status(200).send('Working on it, sir. This is a prototype. -J.A.R.V.I.S.');});
app.get('/weather', handleGetWeather);
app.get('/movies', handleGetMovies);
app.get('/*', (req, res) => res.status(404).send('rout not found'));





// turns server on
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));