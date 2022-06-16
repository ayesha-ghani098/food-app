import { uuid } from "uuidv4";
import orderModel from "../models/orderModel.js";

// @desc    Create Order
export const createOrder = async (req, res, next) => {
  const { userId, orderItems, totalPrice } = req.body.order;
  try {
    await orderModel.create({
      userId,
      orderId: uuid(),
      orderItems,
      totalPrice,
    });

    res.status(200).json({ success: true, data: "Order has been placed" });
  } catch (err) {
    next(err);
  }
};

// @desc   GET ORDERS BY ID

export const getOrdersById = async (req, res, next) => {
   const userId = req.params.userId;
  try {
    const orders = await orderModel.find({userId});
    res.status(200).json({ success: true, data: orders });
  } catch (err) {
    next(err);
  }
};
