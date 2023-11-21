import express from 'express';

import helloWorld from './hello-world';

const router = express.Router();

export default (): express.Router => {
    helloWorld(router);

    return router;
}