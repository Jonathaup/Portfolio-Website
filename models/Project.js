const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  tags: [String],
});

module.exports = mongoose.model('Project', projectSchema);
