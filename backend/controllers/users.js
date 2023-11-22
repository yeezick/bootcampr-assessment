import mongoose from 'mongoose';
import User from './../models/user.js';
mongoose.model('User');
import bcrypt from 'bcryptjs';

export const createNewUser = async (req, res, next) => {
  let downcaseEmail =  req.body.email.toLowerCase();
  
  try {
    const user = await User.findOne({ email: downcaseEmail});

    // check if email already exists.
    if (user) {
      const err = new Error("A user has already registered with this email");
      err.statusCode = 400;
      throw err;
    }
    
    const { firstName, lastName, email, password } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      email
    });

    bcrypt.genSalt(10, (err, salt) => {
      if (err) throw err;
      bcrypt.hash(password, salt, async (err, hashedPassword) => {
        if (err) throw err;

        try {
          newUser.hashedPassword = hashedPassword;
          const savedUser = await newUser.save();
          res.status(201).json({ message: 'User created successfully', user: savedUser });
        }
        catch(err) {
          next(err);
        }
      })
    });

  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
};

// Bonus - Create controller to verify existing emails

export const verifyEmail = async (req, res) => {
  let downcaseEmail =  req.body.email.toLowerCase();
  
  try {
    const user = await User.findOne({ email: downcaseEmail});

    if (user) {
      res.status(200).json({ exists: true, message: 'Email exists' });
    } else {
      res.status(200).json({ exists: false, message: 'Email does not exist' });
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};
