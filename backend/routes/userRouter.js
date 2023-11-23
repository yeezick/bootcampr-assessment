
import { Router } from "express";

const router = Router();
import { signup, checkEmail } from "../controllers/userController.js";

// user signup endpoint
router.post("/signup", signup);

// check email availability endpoint
router.post("/check-email", checkEmail);

export default router;
