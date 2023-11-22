import { Router } from 'express';
import { getHelloWorld } from '../controllers/hello-world.js';

const express = require("express");
const router = Router();
const { home, register } = require("../controllers/controller");

// Hello World!
router.get('/hello-world', getHelloWorld);

router.route("/").get(home);

router.route('/sign-up').post(register);

export default router;