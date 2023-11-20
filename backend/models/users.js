import mongoose from "mongoose";

const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export default mongoose.model("users", usersSchema);
