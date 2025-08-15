import express from "express";
import {
  getAllProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.js";
const router = express.Router();

router.get("/getAllProducts", getAllProducts);
router.post("/addProduct", addProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);

export default router;
