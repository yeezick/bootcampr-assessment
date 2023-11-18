import Users from "../models/users.js";

const userController = {};

userController.getUser = async (req, res, next) => {
  console.log("in getUser");
  try {
    console.log(req.query.email.toLowerCase());
    const response = await Users.find({ email: req.query.email.toLowerCase() });
    res.locals.user = response.length > 0 ? { email: response[0].email } : null;
    return next();
  } catch (error) {
    console.log(error.message);
  }
};

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
  const { email, password } = req.body;
  try {
    const response = await Users.create({
      email: email.toLowerCase(),
      password,
    });
    return next();
  } catch (error) {
    return next(error.message);
  }
};

export default userController;
