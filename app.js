// Import the dotenv module
require('dotenv').config();

// Import the Express module
const express = require('express');

// Import cors module
const cors = require('cors');

// import database connection...
const DBconnect = require('./config/db.js');

// create an Express Application
const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// initiliaze database connection
DBconnect();

// import router...
const userRoutes = require('./routes/user.route.js');

// create route
app.use('/', userRoutes);

// export express app
module.exports = app;

