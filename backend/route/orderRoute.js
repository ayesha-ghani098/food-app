import express from "express";

// Controllers
import { createOrder } from "../controllers/order.js";

const router = express.Router();

// Routes
router.route("/createOrder").post(createOrder);

export default router;