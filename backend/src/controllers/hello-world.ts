import { RequestHandler } from "express";

export const getHelloWorld: RequestHandler = (req, res) => {
    res.status(200).json("Hello World!")
}