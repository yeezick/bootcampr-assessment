// Import required modules
const express = require('express'); // Express framework for web application
const cors = require('cors'); // Cross-Origin Resource Sharing middleware
const logger = require('morgan'); // HTTP request logger middleware
const routes = require('./routes/router.js'); // Import router module

// Create Express application
const app = express();
const PORT = 8001; // Port number to listen on

// Enable CORS middleware
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Enable logging for development environment
app.use(logger('dev'));

// Mount the router middleware
app.use(routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start listening on the specified port
app.listen(PORT, () => {
  console.log(`Now listening on PORT: ${PORT}`);
});