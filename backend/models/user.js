import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
      firstName: {
           type: String,
           required: true
      },
      lastName: {
        type: String,
        required: true
   },
      email: {
        type: String,
        required: true,
        lowercase:true,
        unique:true
      },
      password: {
        type: String,
        required: true
      },
}, { timestamps: true})

export default mongoose.model('user', UserSchema);