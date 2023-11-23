import db from "./db/connection.js";
import express from "express";
import logger from "morgan";
import cors from "cors";
import routes from "./routes/router.js";
import userRoutes from "./routes/userRouter.js";

const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(routes);
app.use("/api/users",userRoutes)
app.listen(PORT, console.log(`Now listening on PORT: ${PORT}`));
