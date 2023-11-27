import { Router } from "express";
import { getHelloWorld } from "../controllers/hello-world.js";
import { registerUser } from "../controllers/register.js";

const router = Router();

// Hello World!
router.get("/hello-world", getHelloWorld);

router.post("/register", registerUser);

export default router;
