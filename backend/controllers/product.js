import productModel from "../models/productModel.js";


// @desc    Create Order
export const getAllProducts = async (req, res, next) => {
   
    try {
        const products = await productModel.find({});
        res.json(products);
    } catch (error) {
        res.json({message:error})
    }
  };
  