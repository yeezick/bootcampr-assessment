import bcrypt from "bcrypt";
import { UserModel } from "../models/User.js";

export const checkEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await UserModel.findOne({ email });

    if (user) {
      res.json({ message: "Email already exists!" });
    } else {
      res.json({ message: "Email doesn't exist" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const signUp = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
  } = req.body;

  if (password !== passwordConfirmation) {
    res.json({ message: "Passwords do not match!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  res.json({ message: "User Registered Successfully" });
};
