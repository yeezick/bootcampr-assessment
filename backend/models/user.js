const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
        require: true,
    },
    lastName: {
        type:String,
        require: true,
    },
    email: {
        type:String,
        require: true,
    },
    password: {
        type:String,
        require: true,
    }
})

const User = new mongoose.model("User", userSchema);

module.exports = User;