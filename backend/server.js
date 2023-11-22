require("dotenv").config();
import db from "./db/connection.js";
import express from "express";
import logger from "morgan";
import cors from "cors";
import routes from "./routes/router.js";

const express = require("express");
const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(routes);

app.get("/", (req, res) => {
    res.status(200).send("Successful route to the main page");
});

app.get("/sign-up", (req, res) => {
    res.status(200).send("Welcome to the Registration page");
});

db().then( () => {
    app.listen(PORT, () => {
        console.log(`Now listening on PORT: ${PORT}`);
    });
});



