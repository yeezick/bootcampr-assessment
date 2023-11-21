import bcrypt from 'bcrypt';
import createUser from '../models/user.js';

export const getHelloWorld = (req, res) => {
  res.status(200).json("Hello World!");
};

export const createUser = async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(200).json({ message: 'User created', user: createUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
