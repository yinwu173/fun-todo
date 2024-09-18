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

// Initialize app
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// Listen for port
app.listen(PORT, () => 
    console.log(`App is listening at http://localhost:${PORT}`)
);
    
