const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Página principal
router.get('/', (req, res) => {
  res.render('index');
});

// Página de proyectos con búsqueda
router.get('/projects', async (req, res) => {
  const { search } = req.query;
  let query = {};
  if (search) {
    query = { title: new RegExp(search, 'i') };
  }
  try {
    const projects = await Project.find(query);
    res.render('projects', { projects, search });
  } catch (error) {
    res.status(500).send('Error loading projects');
  }
});

module.exports = router;
