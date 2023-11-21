import { Router } from "express";
import userController from "../controllers/userController.js";
import { getHelloWorld } from "../controllers/hello-world.js";

const router = Router();

// Hello World!
router.get("/hello-world", getHelloWorld);

router.get("/api/user", userController.getUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

router.post("/api/user", userController.addUser, (req, res) => {
  return res.status(200).json("user created");
});

export default router;
