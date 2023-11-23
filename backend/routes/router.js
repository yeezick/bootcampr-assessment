import { Router } from 'express';
import {createUser, getAllUsers, updateUser, deleteUser } from '../controllers/hello-world.js';

const router = Router();

router.post('/users', createUser);

router.get('/users', getAllUsers);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export default router;