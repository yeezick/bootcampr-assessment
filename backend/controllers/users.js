import User from '../models/user.js';

export async function createUser(req, res) {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
};

export const sayHello = (req, res) => {
    res.status(200).json("Hello World!");
  };