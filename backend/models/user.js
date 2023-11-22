import { model, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
  }
)

export const User = model("User", UserSchema)



