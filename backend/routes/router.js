import { Router } from "express";
import { getHelloWorld } from "../controllers/hello-world.js";
import { checkEmail, createUser } from "../controllers/userController.js";

const router = Router();

// Hello World!
router.get("/hello-world", getHelloWorld);

router.post("/sign-up", createUser);

router.get("/check-email", checkEmail);

export default router;
