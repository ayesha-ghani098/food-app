import express from "express";
import User from "../models/userModel.js";
import { body } from 'express-validator';

// Controllers
import {
  register,
  login,
} from "../controllers/user.js";

const router = express.Router();

router.post("/register", [
    body('email', "email has to be valid").isEmail()
        .withMessage('Please enter a valid email address.')
        .normalizeEmail().custom(async value => {
            const user = await User.findOne({ email: value });   
            if (user) {
                return Promise.reject('Email already in use');
            }
        }),
    body('password', 'Password has to be valid.')
        .isLength({ min: 8 })
        .trim(),

    body('username', "Name should be atleast 3 letters")
        .trim()
        .isLength({ min: 3 }),
    body('number', "Phone number should contain 11 numbers")
        .isNumeric()
        .isLength({ min: 11 })
],register);


router.post("/login", [body('email')
    .isEmail()
    .withMessage('Please enter a valid email address.')
    .normalizeEmail().custom(async value => {
        const user = await User.findOne({ email: value });   
        if (!user) {
            return Promise.reject('Email does not exist');
        }
    }),
    body('password', 'Password has to be valid.')
    .isLength({ min: 8 })
   
], login);

// Routes
// router.route("/register").post(register);
// router.route("/login").post(login);

export default router;

