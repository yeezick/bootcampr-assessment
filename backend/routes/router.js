import { Router } from 'express';
import { getHelloWorld } from '../controllers/hello-world.js';
import { checkEmailExist, createUser } from '../controllers/user.js';
const router = Router();

// Hello World!
router.get('/hello-world', getHelloWorld)
router.post('/users', createUser)
router.post('/check-email', checkEmailExist)
export default router;