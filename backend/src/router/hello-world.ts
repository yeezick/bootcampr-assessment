import express from 'express';

import { getHelloWorld } from '../controllers/hello-world';

export default (router: express.Router) => {
    router.get("/hello-world", getHelloWorld);
}