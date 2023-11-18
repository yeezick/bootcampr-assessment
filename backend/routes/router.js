import { Router } from "express";
import userController from "../controllers/userController.js";
import { getHelloWorld } from "../controllers/hello-world.js";

const router = Router();

// Hello World!
router.get("/hello-world", getHelloWorld);

router.get("/users", userController.getUsers, (req, res) => {
  return res.status(200).json(res.locals.users);
});

router.post("/users", userController.addUser, (req, res) => {
  return res.status(200).json({});
});

export default router;
