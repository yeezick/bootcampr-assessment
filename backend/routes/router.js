import { Router } from 'express';
import { getHelloWorld } from '../controllers/hello-world.js';

const router = Router();

// Hello World!
router.get('/hello-world', getHelloWorld);
router.post('/sign-up', createUser);
import { createUser } from '../controllers/users.js';

export default router;