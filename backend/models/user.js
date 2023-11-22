import { model, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  }
)

export const User = model("User", UserSchema)

const user1 = new User({
  firstname: "Jordan",
  lastname: "Jennings",
  email: "jj@gmail.com",
  password: "123456Jj*"
})

user1.save()

