import { Router } from 'express';
import signupController from '../controllers/signupController.js';

const router = Router();

router.post('/signup', signupController)

export default router;