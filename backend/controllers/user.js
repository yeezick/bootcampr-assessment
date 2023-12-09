import { User } from "../models/user.js"

export const getUsers = async (req, res) => {
  const allUsers = await User.find();
  return res.status(200).json(allUsers)
};

export const newUser = async(req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  })

  const existingUser = await User.find({ email: req.body.email })

  if(existingUser.length > 0){
    return res.status(404).json({
      error: `User already exists.`
    })
  } 


  await user.save()
  return res.json(user)

}