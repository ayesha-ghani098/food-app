import productModel from "../models/productModel.js";

// @desc    GET ALL PRODUCTS
export const getAllProducts = async (req, res, next) => {
    try {
        const products = await productModel.find({});
        res.status(200).json({ success: true, data: products });
    } catch (err) {
        next(err);
    }
  };
  