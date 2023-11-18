import { Router } from 'express';
import { addUser } from '../controllers/userController.js';
import { validateEmail } from '../controllers/userController.js';

const router = Router();

// Hello World!
router.post('/add-user', addUser);
router.get('/validate-email/:email', validateEmail);

export default router;