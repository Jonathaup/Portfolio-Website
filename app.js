// Import required modules
const express = require('express');              // Express framework for creating the server
const mongoose = require('mongoose');            // Mongoose library to interact with MongoDB
const bodyParser = require('body-parser');       // Middleware to parse request bodies
const app = express();                           // Initialize Express app

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolioDB', {
  useNewUrlParser: true,                         // Use new URL parser to avoid deprecation warnings
  useUnifiedTopology: true                       // Use the new Server Discover and Monitoring engine
}).then(() => {
  console.log('Connected to MongoDB');           // Log success message if connected
}).catch(err => {
  console.error('MongoDB connection error:', err); // Log error if connection fails
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false })); // Parse form data sent with URL encoding
app.use(express.static('public'));                   // Serve static files from the 'public' folder
app.set('view engine', 'ejs');                       // Set EJS as the templating engine

// Routes
const indexRoutes = require('./routes/index');      // Import route definitions from routes/index.js
app.use('/', indexRoutes);                           // Use imported routes for root path

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); // Log the URL where the server is running
});
