import express from "express";
import { getAllProducts,createProduct , deleteProduct,updateProduct} from "../controllers/product.js";
const router = express.Router();

router.get("/getAllProducts",getAllProducts);
router.post("/createProduct", createProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);

export default router;


