import Users from "../models/users.js";
import bcrypt from "bcrypt";

const userController = {};

userController.getUser = async (req, res, next) => {
  console.log("in getUser");
  try {
    const response = await Users.find(
      req.query.email ? { email: req.query.email.toLowerCase() } : {}
    );

    res.locals.user =
      response.length > 0
        ? response.map((ele) => {
            return {
              firstname: ele["firstname"],
              lastname: ele["lastname"],
              email: ele.email,
              createdAt: ele["created_at"],
              updatedAt: ele["updated_at"],
            };
          })
        : null;
    return next();
  } catch (error) {
    console.log(error.message);
  }
};

userController.addUser = async (req, res, next) => {
  console.log("in addUser");

  const saltRounds = 10;
  const { firstname, lastname, email, password } = req.body;

  try {
    const hashedPW = await bcrypt.hash(password, saltRounds);

    Users.create({
      firstname,
      lastname,
      email: email.toLowerCase(),
      password: hashedPW,
    });

    return next();
  } catch (error) {
    return next(error.message);
  }
};

export default userController;
