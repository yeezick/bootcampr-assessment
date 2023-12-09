import { Router } from 'express';

import { getHelloWorld } from '../controllers/hello-world.js';
import { getUsers } from '../controllers/user.js';
import { newUser } from '../controllers/user.js';



const router = Router();


// Hello World!
router.get('/hello-world', getHelloWorld)
router.get('/users', getUsers)
router.post('/users', newUser)


export default router;