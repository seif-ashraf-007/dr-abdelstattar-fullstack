// models/BlogPost.js

const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }, // Change paragraph to content
    image: { type: String },
    tags: [String],
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);
