// Import express package
const express = require('express');


// HTML routes should be created
// Require the HTML file and assign it to a variable called htmlRoutes
const htmlRoutes = require('./routes/html');

// API routes should be created
// Require the API file and assign it to a variable called apiRoutes
const apiRoutes = require('./routes/api');

// Specify Port
const PORT = process.env.PORT || 3001;
