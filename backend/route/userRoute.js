import express from "express";

// Controllers
import {
  register,
  login,
  forgotpassword,
  resetpassword,
  getUserbyId,
} from "../controllers/user.js";

const router = express.Router();

// Routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").post(resetpassword);
router.route("/getUserById/:userId",getUserbyId)

export default router;

