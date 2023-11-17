import { Router } from "express";
import { getHelloWorld } from "../controllers/hello-world.js";
import { postUser } from "../controllers/user.js";

const router = Router();

// Hello World!
router.get("/hello-world", getHelloWorld);

// Create User
router.post("/user", postUser);

export default router;
