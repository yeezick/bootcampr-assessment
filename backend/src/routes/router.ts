import { Router } from 'express';
import { getHelloWorld } from '../controllers/hello-world.js';

const router = Router();

// Hello World!
router.get('/hello-world', getHelloWorld)

export default router;