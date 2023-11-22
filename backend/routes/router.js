import { Router } from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = Router();

router.get("/email-check/:email", async (req, res) => {
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
});

router.post("/register", async (req, res) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    password,
    passwordConfirmation,
  } = req.body;

  if (password !== passwordConfirmation) {
    res.json({ message: "Passwords do not match!" });
  }

  const user = await UserModel.findOne({ userName });
  if (user) {
    res.json({ message: "Username already exists!" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    firstName,
    lastName,
    userName,
    email,
    password: hashedPassword,
  });
  await newUser.save();

  res.json({ message: "User Registered Successfully" });
});

export default router;
