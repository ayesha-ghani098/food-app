import productModel from "../models/productModel.js";


// @desc    Create Order
export const getAllProducts = async (req, res, next) => {
   
    try {
        const products = await productModel.find({});
        console.log("pr",products);
        res.json(products);
    } catch (error) {
        res.json({message:error})
    }
  };
  