import User from "../models/user.js"

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const checkEmailExist = async (req, res) => {
    const userEmail = req.body.email
    try {
        const email = await User.exists({email: userEmail})
        const isEmailExist = email !== null
        res.json({exists: isEmailExist})
    } catch (error) {
        res.status(400).send(error);
    }
    
}