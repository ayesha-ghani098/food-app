import { uuid } from 'uuidv4';
import orderModel from "../models/orderModel.js";

// @desc    Create Order
export const createOrder = async (req, res, next) => {
  const { userId, username, number, email, address, items, total,shippingMode,paymentMode } = req.body;

  try {
    const order = await orderModel.create({
      userId,
      orderId: uuid(),
      username,
      email,
      number,
      address,
      items,
      total,
      shippingMode,
      paymentMode
    });

    res.status(200).json({ success: true, data: "Order has been placed" });
  } catch (err) {
    next(err);
  }
};
