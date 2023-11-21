import express from 'express';

import { createUser } from '../controllers/signup';

export default (router: express.Router) => {
    router.post("/sign-up", createUser);
}