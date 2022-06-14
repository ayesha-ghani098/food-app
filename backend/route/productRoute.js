import express from "express";
import { getAllProducts } from "../controllers/product.js";
const router = express.Router();


// GET ALL PRODUCTS || @GET REQUEST
router.get("/getAllProducts",getAllProducts);

export default router;


