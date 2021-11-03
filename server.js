'use strict';

// allows use of env file
require('dotenv').config();

// imported dependancies
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());




// turns server on
app.listen(3001, () => console.log(`Listening on Port ${PORT}`));