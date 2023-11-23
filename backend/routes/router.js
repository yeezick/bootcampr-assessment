import { Router } from "express";
import { getHelloWorld } from "../controllers/hello-world.js";
import { postUser } from "../controllers/user.js";
import { verifyEmail } from "../controllers/verifyEmail.js";

const router = Router();

// Hello World!
router.get("/hello-world", getHelloWorld);

// Create User
router.post("/user", postUser);

// Verify email
router.post("/verify-email", verifyEmail);

export default router;
