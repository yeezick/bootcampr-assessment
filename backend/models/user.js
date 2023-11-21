const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    passwordConfirm: String,
    isChecked: Boolean // for Checkbox
});

const User = mongoose.model('User', userSchema);

module.exports = User;