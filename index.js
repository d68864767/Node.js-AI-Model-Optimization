// Importing required modules
const express = require('express');
const dotenv = require('dotenv');

// Importing other modules from the project
const optimization = require('./optimization');
const security = require('./security');
const collaboration = require('./collaboration');
const certification = require('./certification');
const hackathons = require('./hackathons');
const market_analysis = require('./market_analysis');
const intellectual_property = require('./intellectual_property');
const user_communities = require('./user_communities');
const predictive_maintenance = require('./predictive_maintenance');
const supply_chain = require('./supply_chain');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Use imported modules as middleware
app.use('/optimization', optimization);
app.use('/security', security);
app.use('/collaboration', collaboration);
app.use('/certification', certification);
app.use('/hackathons', hackathons);
app.use('/market_analysis', market_analysis);
app.use('/intellectual_property', intellectual_property);
app.use('/user_communities', user_communities);
app.use('/predictive_maintenance', predictive_maintenance);
app.use('/supply_chain', supply_chain);

// Define a default route
app.get('/', (req, res) => {
  res.send('Welcome to Node.js AI Model project. Please refer to the documentation for available routes and functionalities.');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
