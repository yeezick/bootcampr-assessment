const User = require('../models/user');
const bcrypt = require('bcrypt');
const express = require('express');

const router = express.Router();

// Route to handle user Signup
router.post('/signup', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            passwordConfirm,
            isChecked,
        } = req.body;

        if (password !== passwordConfirm) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            passwordConfirm,
            isChecked,
        });

        await newUser.save();
        res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;