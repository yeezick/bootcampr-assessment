import bcrypt from 'bcrypt';
import z from 'zod';

import { RequestHandler } from "express";

import User from '../models/User';

const createSchema = z.object({
    firstName: z.string({
        required_error: "First name is required"
    }),
    lastName: z.string({
        required_error: "Last name is required"
    }),
    email: z.string({
        required_error: "Email is required"
    }).email("Invalid email"),
    password: z.string({
        required_error: "Password is required"
    }),
    confirmPassword: z.string({
        required_error: "Please confirm your password"
    })
})

type signupType = z.infer<typeof createSchema>;

export const createUser: RequestHandler = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword }: signupType = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "Please provide first name, last name, email, and password" });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword
        })

        res.status(201).json(user);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            return res.status(400).json({ message: `Error creating user: ${error.message}` });
        }
    }
}