import User from "../models/user.js";
import { createSecretToken } from "../util/secretToken.js";
import bcrypt from 'bcrypt';

export const getHelloWorld = (req, res) => {
  res.status(200).json("Hello World!");
};

export const Signup = async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password, firstName, lastName, agreement } = req.body;

    if (agreement === false || !agreement) {
      return res.status(400).json({ message: "You must agree to the terms to sign up" });
    }

    // Validate password complexity
    if (!validatePasswordComplexity(password)) {
      return res.status(400).json({ message: "Password does not meet complexity requirements" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const userData = {
      email,
      password: hashedPassword,
      firstName,
      lastName,
      agreement,
    };

    const user = await User.create(userData);

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.status(201).json({ message: "User signed up successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to validate password complexity
function validatePasswordComplexity(password) {
  // Minimum 8 characters, at least one uppercase letter, one lowercase letter, and one symbol
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}
