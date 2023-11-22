import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    consent: {type: Boolean, required: true}
})

const User = mongoose.model('User', UserSchema)
export default User

