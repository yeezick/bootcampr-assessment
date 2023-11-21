const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    firstName: {
        type: String, 
        required: true,
    },

    lastName: {
        type: String, 
        required: true,
    },

    email: {
        type: String, 
        required: true,
        lowerCase: true, 
        unique: true,
        trim: true, 
    }, 

    password: {
        type: String, 
        required: true,
    }, 

    receiveNotifications: {
        type: boolean, 
        default: false
    }

})

module.exports = mongoose.model('User', userSchema);