const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const User = require('./models/User');
const app = express();
app.use(express.json());

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
app.post('/api/change-password', async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    try {
        // Verify JWT
        const token = req.header('Authorization').split(' ')[1];
        const decoded = jwt.verify(token, jwtSecret);

        const user = await User.findById(decoded.id);
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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
