import { Router } from 'express';
import { getHelloWorld } from '../controllers/hello-world.js';
import { createUser } from '../controllers/users.js';


const router = Router();

// Hello World!
router.get('/hello-world', getHelloWorld);

router.post('/sign-up', createUser);


export default router;