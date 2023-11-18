import Users from "../models/users.js";

const userController = {};

userController.getUsers = async (req, res, next) => {
  console.log("in getUsers");
  try {
    const response = await Users.find({});
    res.locals.users = await response;
    return next();
  } catch (error) {
    console.log(error.message);
  }
};

userController.addUser = async (req, res, next) => {
  console.log("in addUser");
  const { username, password } = req.body;
  try {
    const response = await Users.create({ username, password });
    return next();
  } catch (error) {
    return next(error.message);
  }
};

export default userController;
