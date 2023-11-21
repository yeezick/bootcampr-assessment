import express from 'express';

import helloWorld from './hello-world';
import signUp from './sign-up';

const router = express.Router();

export default (): express.Router => {
    helloWorld(router);
    signUp(router);

    return router;
}