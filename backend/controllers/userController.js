import Users from "../models/users.js";
import bcrypt from "bcrypt";

const userController = {};

userController.getUser = async (req, res, next) => {
  console.log("in getUser");
  try {
    console.log(req.query.email.toLowerCase());

    const response = await Users.find(
      req.query.email ? { email: req.query.email.toLowerCase() } : {}
    );

    res.locals.user = response.length > 0 ? response : null;
    return next();
  } catch (error) {
    console.log(error.message);
  }
};

userController.addUser = async (req, res, next) => {
  console.log("in addUser");

  const saltRounds = 10;
  const { email, password } = req.body;

  try {
    const hashedPW = await bcrypt.hash(password, saltRounds);

    Users.create({
      email: email.toLowerCase(),
      password: hashedPW,
    });

    return next();
  } catch (error) {
    return next(error.message);
  }
};

export default userController;
