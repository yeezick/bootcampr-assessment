
import db from "./db/connection.js";
import express from "express";
import logger from "morgan";
import cors from "cors";
import routes from "./routes/router.js";

// Create an Express app
const app = express();

// Set the port
const PORT = 8001;

// Apply middleware
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

// Use the defined routes
app.use(routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is now listening on PORT: ${PORT}`);
});

