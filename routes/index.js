// Import Express and create a router
const express = require('express');
const router = express.Router();

// Import the Project model
const Project = require('../models/Project');

// Home page route
router.get('/', (req, res) => {
  // Render the 'index' view when the root URL is accessed
  res.render('index');
});

// Projects page with optional search functionality
router.get('/projects', async (req, res) => {
  const { search } = req.query; // Get the search query parameter from the URL
  let query = {}; // Default to empty query (fetch all projects)

  // If search is provided, create a case-insensitive regex to match titles
  if (search) {
    query = { title: new RegExp(search, 'i') };
  }

  try {
    // Find projects in the database matching the query
    const projects = await Project.find(query);

    // Render the 'projects' view, passing the list of projects and the search string
    res.render('projects', { projects, search });
  } catch (error) {
    // If there's an error, respond with status 500 and an error message
    res.status(500).send('Error loading projects');
  }
});

// Export the router so it can be used in other parts of the app
module.exports = router;
