import { Router } from 'express';
import addUser from '../controllers/userController.js';

const router = Router();

// Hello World!
router.post('/add-user', addUser)

export default router;