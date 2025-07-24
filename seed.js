const mongoose = require('mongoose');
const Project = require('./models/Project'); // Asegúrate que esta ruta es correcta

mongoose.connect('mongodb://127.0.0.1:27017/portfolioDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const sampleProjects = [
  {
    title: "To-Do List App",
    description: "A simple to-do list built with Node.js and Express.",
    imageUrl: "https://via.placeholder.com/150",
    tags: ["Node.js", "Express", "EJS"]
  },
  {
    title: "Weather Dashboard",
    description: "Fetches weather data using an external API.",
    imageUrl: "https://via.placeholder.com/150",
    tags: ["JavaScript", "API", "Frontend"]
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio site with projects, built for CSE 310.",
    imageUrl: "https://via.placeholder.com/150",
    tags: ["HTML", "CSS", "Node.js"]
  }
];

// Insertar proyectos y cerrar conexión
Project.insertMany(sampleProjects)
  .then(() => {
    console.log("✅ Database seeded with projects!");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("❌ Seeding error:", err);
    mongoose.connection.close();
  });
