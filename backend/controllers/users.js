import mongoose from 'mongoose';
import User from './../models/user.js';
mongoose.model('User');
import bcrypt from 'bcryptjs';



export const createNewUser = async (req, res, next) => { 

  let downcaseEmail =  req.body.email.toLowerCase();
  const user = await User.findOne({ email: downcaseEmail});

  // verify if email already exists.
  if (user) {
    const err = new Error("Validation Error");
    err.statusCode = 400;
    const errors = {};

    if (user.email === req.body.email) {
      errors.email = "A user has already registered with this email";
    }

    err.errors = errors;
    return next(err);
  }
  
  const { firstName, lastName, email, password } = req.body;

  try {
    const newUser = new User({
      firstName,
      lastName,
      email
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }


  bcrypt.genSalt(10, (err, salt) => {
    if (err) throw err;
    bcrypt.hash(password, salt, async (err, hashedPassword) => {
      if (err) throw err;
      try {
        newUser.hashedPassword = hashedPassword;
        const user = await newUser.save();
        return res.json(await loginUser(user));
      }
      catch(err) {
        next(err);
      }
    })
  });

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
