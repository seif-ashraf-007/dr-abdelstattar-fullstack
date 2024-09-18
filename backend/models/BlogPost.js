const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    paragraph: { type: String, required: true },
    pictures: [{ type: String }],
    author: { type: String, default: 'Dr. Abdelsattar Ahmed Nasr' },
    timestamp: { type: Date, default: Date.now }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
