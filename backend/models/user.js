import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, minLength: 8, required: true },
    password: { type: String, required: true },
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } })

const User = mongoose.model('users', userSchema)
export default User
