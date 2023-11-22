const User = require('../models/user.js');
const bcrypt = require('bcrypt');

/**
 * Returns a JSON response with a status code of 200 and the message "Hello World!".
 *
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @return {object} The JSON response containing the message "Hello World!".
 */
export const getHelloWorld = (req, res) => {
  // Set the status code to 200 and send a JSON response with the message "Hello World!"
  res.status(200).json("Hello World!");
};

/**
 * Create a new user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
exports.createUser = async (req, res) => {
  try {
    // Retrieve user data from request body
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

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      passwordConfirm,
      isChecked,
    });

    // Save the new user to the database
    await newUser.save();

    // Send success response
    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    // Send error response
    res.status(500).json({ message: error.message });
  }
};
