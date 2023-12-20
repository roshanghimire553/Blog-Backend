const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  category: {
    unique: true,
    type: String,
    required: true,
  },
});

const BlogModel = mongoose.model("Blog", BlogSchema);
module.exports = BlogModel;
