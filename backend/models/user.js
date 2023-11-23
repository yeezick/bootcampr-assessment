import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailName: { type: String, minLength: 8, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    firstName: { type: String },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const User = mongoose.model('User', userSchema)
export default User