
import User from "../models/User.js"

export const registerUser = (req, res) => {
    User.create(req.body)
    .then(users => res.json(users))
    .catch(err=> res.json(err))
  };
