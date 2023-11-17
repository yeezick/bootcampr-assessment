import { User } from "../models/user.js";

export const postUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};
