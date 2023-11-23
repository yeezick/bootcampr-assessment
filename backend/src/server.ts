import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import router from './router/router';
import connect from './db/connection';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(logger('dev'))

app.use('/', router());

app.listen(PORT, async () => {
    console.log("listening on 8001");

    await connect();
})