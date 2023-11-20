import connect from "./db/connection.js";
import express from "express";
import logger from 'morgan';
import cors from "cors";
import routes from "./routes/router.js";

const app = express();
const { PORT } = process.env;

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(routes);

app.listen(PORT, async () => {
    console.log(`Now listening on PORT: ${PORT}`);

    await connect();
})
