import db from '../db/connection.js';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const addUser = async(req, res, next) => {
  try {
    const {firstName, lastName, password, email} = req.body
    
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      password: hashedPassword,
      email: email,
    })

    const savedUser = await newUser.save();

  } catch (err){
    return next(err);
  }
};

const validateEmail = async (req, res, next) => {
  const {email} = req.params;
  
}

export default addUser;