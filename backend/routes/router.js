import { Router } from "express";
import userController from "../controllers/userController.js";
import { getHelloWorld } from "../controllers/hello-world.js";

const router = Router();

// Hello World!
router.get("/hello-world", getHelloWorld);

router.get("/user", userController.getUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

router.get("/users", userController.getUser, (req, res) => {
  return res.status(200).json(res.locals.users);
});

router.post("/user", userController.addUser, (req, res) => {
  return res.status(200).json("user created");
});

export default router;
