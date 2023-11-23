import mongoose from 'mongoose';

interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const UserSchema = new mongoose.Schema<IUser>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false }
}, { timestamps: true });

const User = mongoose.model<IUser>("User", UserSchema);

export default User;