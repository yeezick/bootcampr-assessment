const User = require('../models/user');
const bcrypt = require('bcrypt');
const express = require('express');

const router = express.Router();

/**
 * Route to handle user Signup
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
// Handle POST request to '/signup'
router.post('/signup', async (req, res) => {
    try {
        // Destructure request body
        const {
            firstName,
            lastName,
            email,
            password,
            passwordConfirm,
            isChecked,
        } = req.body;

        // Check if passwords match
        if (password !== passwordConfirm) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new User object
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            passwordConfirm,
            isChecked,
        });

       // Save the user to the database
       await newUser.save();

       res.status(200).json({ message: 'User created successfully' });
   } catch (error) {
       console.error('Signup Error:', error); // Log the error for debugging

       // Handle different types of errors
       if (error.code === 11000) {
           return res.status(400).json({ message: 'Email already exists' });
       }

       res.status(500).json({ message: 'Internal server error' });
   }
});

module.exports = router;