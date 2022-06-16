import express from "express";

// Controllers
import { createOrder,getOrdersById } from "../controllers/order.js";

const router = express.Router();

// Routes
router.route("/createOrder").post(createOrder);
router.route("/getOrdersById/:userId").get(getOrdersById);

export default router;