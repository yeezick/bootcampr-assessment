import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: String,
        confirmPassword: String,
        agreedTerms: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;