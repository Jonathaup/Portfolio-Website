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
    imageUrl: "https://th.bing.com/th/id/OIP.Tai24BuXPmuSiOsItwzedgHaFj?w=199&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    tags: ["Node.js", "Express", "EJS"]
  },
  {
    title: "Weather Dashboard",
    description: "Fetches weather data using an external API.",
    imageUrl: "https://ts4.mm.bing.net/th?id=OIP.y9WGKxTnB_YQiK3S5vh1HAAAAA&pid=15.1",
    tags: ["JavaScript", "API", "Frontend"]
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio site with projects, built for CSE 310.",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.0cQlfLaNHj0yXSfq2yyQywHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
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
