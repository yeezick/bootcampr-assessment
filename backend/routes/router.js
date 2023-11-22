import { Router } from "express";
import { signUp, checkEmail } from "../controllers/Users.js";

const router = Router();

router.get("/email-check/:email", checkEmail);

router.post("/register", signUp);

export default router;
