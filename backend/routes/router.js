import { Router } from 'express';
import { createUser, sayHello } from '../controllers/users.js';


const router = Router();

// POST '/sign-up'
router.post('/sign-up', createUser);
// Hello World!
router.get('/hello-world', sayHello)



export default router;