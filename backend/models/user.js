import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const Schema = mongoose.Schema;
const SALT_ROUNDS = 6;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: { type: String, required: true }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});

const User = mongoose.model('User', userSchema);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB at ${mongoose.connection.host}:${mongoose.connection.port}, database: ${mongoose.connection.name}`);
});

export default User;