import mongoose from 'mongoose';
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

    hashedPassword: {
        type: String, 
        required: true,
    }, 

    receiveNotifications: {
        type: Boolean, 
        default: false
    }

})

const User = mongoose.model('User', userSchema);

export default User;