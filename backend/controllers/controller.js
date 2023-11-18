const User = require("../models/user");

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to the home page.");
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { firstname, lastname, email, password } = req.body;

        const userExist = await User.findOne({email});

        if(userExist) {
            return res.status(400).json({msg:"email already exists"});
        }

        const userCreated = await User.create({ firstname, lastname, email, password });
        
        res.status(200).json({ msg: userCreated });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};

module.exports = { home, register };