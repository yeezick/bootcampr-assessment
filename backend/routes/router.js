import { Router } from 'express';
import signupController from '../controllers/signupController.js';
import { emailController } from '../controllers/emailController.js';

const router = Router();

router.post('/signup', signupController)
router.post('/verifyEmail',emailController)

export default router;