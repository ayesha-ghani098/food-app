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
  

  
export const createProduct = async (req, res, next) => {
    const { name, description, price, image, inStock } = req.body;
  
    if (!name || !description || !price || !image || !inStock) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
  
    try {
      const product = await productModel.create({
        name,
        description,
        price,
        image,
        inStock,
      });
      return res.status(200).json({
        success: true,
        message: "Product Created Successfully",
        product,
      });
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteProduct = async (req, res, next) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({ message: "Invalid product" });
    }
  
    try {
      await productModel.findByIdAndRemove(id);
    } catch (err) {
      return res.status(500).json({
        message: "Something went wrong",
      });
    }
  
    return res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
    });
  };
  
  export const updateProduct = async (req, res, next) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({ message: "Invalid product" });
    }
  
    const { name, description, price, image, inStock } = req.body;
  
    try {
      const updatedProduct = await productModel.findByIdAndUpdate(id, {
        ...(name && { name }),
        ...(description && { description }),
        ...(price && { price }),
        ...(image && { image }),
        ...(inStock && { inStock }),
      });
  
      return res.status(200).json({
        success: true,
        message: "Product Updated Successfully",
        product: updateProduct,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Something went wrong",
      });
    }
  };
  