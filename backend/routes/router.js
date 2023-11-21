import { Router } from 'express';
import { getHelloWorld } from '../controllers/hello-world.js';
import { Signup } from '../controllers/signup.js';

const router = Router();

// Hello World!
router.get('/hello-world', getHelloWorld)

router.post("/sign-up", Signup);

export default router;