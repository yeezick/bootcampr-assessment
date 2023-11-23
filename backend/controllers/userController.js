
import { hash } from "bcrypt";
import User from "../models/user.js"; 

const signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body; // Destructure body data

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password using bcrypt
    const hashedPassword = await hash(password, 10);

    // Create a new User instance with hashed password
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword, // Store the hashed password in the database
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Respond with the saved user data
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;

   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    res.status(201).json({ message: "Available email" }); 
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export  {
  checkEmail,
  signup,
};
