import user from "../models/user.js";
import bcrypt from 'bcrypt'

 const signupController = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Generate salt with a cost factor
        const salt = await bcrypt.genSalt(10);

        // Hash the password
        const hashed = await bcrypt.hash(password, salt);

        // Create a new user with the hashed password
        const newUser = await user.create({ firstName, lastName, email, password: hashed });

        console.log("User", newUser);
        return res.status(201).json({ message: 'Registration successful!', savedUser: newUser });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export default signupController;
