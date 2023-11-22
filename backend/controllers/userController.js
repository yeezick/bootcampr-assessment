import { User } from "../models/user.js";

export const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const user = await User.signup({ firstName, lastName, email, password });

    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const checkEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const existingUser = await User.findOne({ email });

    res.json({ exists: !!existingUser });
  } catch (error) {
    console.error("Error checking email: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
