// Import necessary modules
import { Schema, model } from "mongoose";

// Create a Mongoose schema for the user
const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures the email is unique
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a User model based on the userSchema
const User = model("User", userSchema);

// Export the User model to be used in other files
export default User;
