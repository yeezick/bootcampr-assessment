import { Router } from 'express';
import { getHelloWorld } from '../controllers/hello-world.js';
import { createNewUser, verifyEmail } from '../controllers/users.js';
import validateRegisterInput from './../validations/register.js';

const router = Router();

// Hello World!
router.get('/hello-world', getHelloWorld)
router.post('/register', validateRegisterInput, createNewUser)
router.get('/verify-email', verifyEmail)

export default router;