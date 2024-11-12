const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const multer = require('multer'); // Multer for file uploads
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const User = require('./models/User');
const BlogPost = require('./models/BlogPost'); // Import your BlogPost model
const app = express();
app.use(express.json());

// Set up static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
  const upload = multer({ storage });

// Allow requests from your frontend origin (localhost:5173)
app.use(cors({
    origin: 'http://localhost:5173',
}));

const dbConnectionURI = process.env.MONGO_URI;
mongoose.connect(dbConnectionURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

// JWT secret
const jwtSecret = process.env.JWT_SECRET;

// Function to generate JWT token
const generateToken = (user) => {
    return jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });
};

// Middleware to protect routes (requires JWT)
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded; // Attach the decoded token (user) to the request object
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

// User login route
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    console.log('Received login attempt:', { username, password });

    try {
        const user = await User.findOne({ username });
        if (!user) {
            console.log('User not found:', username);
            return res.status(400).json({ message: 'Invalid username' });
        }

        // FIX: Await the password comparison
        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log('Password mismatch for user:', username);
            return res.status(400).json({ message: 'Invalid password' });
        }

        // If successful, generate and send token
        const token = generateToken(user);
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Add user route
app.post('/api/add-user', async (req, res) => {
    const { username, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ username, password: hashedPassword });
        await user.save();

        res.json({ message: 'User created successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error creating user' });
    }
});

// Change password route
app.post('/api/change-password', authenticateToken, async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(400).json({ message: 'User not found' });

        // Check if old password matches
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Incorrect old password' });

        // Hash new password and update user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedPassword;
        await user.save();

        res.json({ message: 'Password changed successfully' });
    } catch (err) {
        console.error('Error during password change:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Blog posts routes

// Fetch all blog posts
app.get('/api/blogPosts', async (req, res) => {
    try {
        const posts = await BlogPost.find();
        res.json(posts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Add a new blog post with image upload (protected route)
app.post('/api/blogPosts', [authenticateToken, upload.single('image')], async (req, res) => {
    const { title, content, tags, author } = req.body;

    try {
        const newPost = new BlogPost({
            title,
            content,
            image: req.file ? `/uploads/${req.file.filename}` : '', // Save file path to the database
            tags: tags.split(',').map(tag => tag.trim()), // Convert comma-separated tags into an array
            author,
            date: new Date(),
        });

        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a blog post (protected route)
app.put('/api/blogPosts/:id', authenticateToken, upload.single('image'), async (req, res) => {
    const { title, content, tags } = req.body;

    try {
      const updatedPostData = {
        title,
        content,
        tags: tags ? tags.split(',').map(tag => tag.trim()) : [], // Split only if tags are provided
      };

      if (req.file) {
        updatedPostData.image = `/uploads/${req.file.filename}`; // Update the image if a new one is uploaded
      }

      const updatedPost = await BlogPost.findByIdAndUpdate(
        req.params.id,
        updatedPostData,
        { new: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }

      res.status(200).json(updatedPost);
    } catch (error) {
      console.error('Error updating blog post:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });


// Delete a blog post (protected route)
app.delete('/api/blogPosts/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;

    try {
        const deletedPost = await BlogPost.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
