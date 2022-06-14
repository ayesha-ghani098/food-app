import express from "express";

// Controllers
import {
  register,
  login,
  forgotpassword,
  resetpassword,
  authenticateToken,
} from "../controllers/user.js";
import protect from "../middleware/auth.js";

const router = express.Router();

// Routes
router.route("/getMe").get(protect, authenticateToken);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").post(resetpassword);

export default router;

