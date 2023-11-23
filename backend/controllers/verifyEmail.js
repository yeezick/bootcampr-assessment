import { User } from "../models/user.js";

export const verifyEmail = async (req, res) => {
  try {
    const email = req.body.email;
    const existingUser = await User.exists({ email });

    if (existingUser) {
      res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(200).json({ message: "Email verified" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
