import { User } from "../models/user.js"

export const getUsers = async (req, res) => {
  console.log("hi")
  const allUsers = await User.find()
  return res.status(200).json(allUsers)
};

export const newUser = async(req, res) => {
  console.log(req.body)
  // const user = new User({
  //   firstname: req.body.firstname,
  //   lastname: req.body.lastname,
  //   email: req.body.email,
  //   password: req.body.password
  // })

  // await user.save()
  // return res.send(user)
}