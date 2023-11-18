import mongoose from "mongoose";

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model("users", usersSchema);
