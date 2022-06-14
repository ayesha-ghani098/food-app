import express from "express";

// Controllers
import { createOrder } from "../controllers/order";

const router = express.Router();

// Routes
router.route("/createOrder").post(createOrder);

export default router;