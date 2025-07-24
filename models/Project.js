// Import mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Define the schema for a Project document in MongoDB
const projectSchema = new mongoose.Schema({
  // Title of the project
  title: String,
  // Description of the project
  description: String,
  // URL of the project's image
  imageUrl: String,
  // Array of tags related to the project
  tags: [String],
});

// Export the Project model based on the projectSchema
module.exports = mongoose.model('Project', projectSchema);
