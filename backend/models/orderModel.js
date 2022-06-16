import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    userId:{
      type: String,
    },
    orderId:{
      type: String,
    },
    orderItems: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    date:{type: Date, default: Date.now}
  },
  { timestamps: true }
);

const orderModel = mongoose.model("order", orderSchema);
export default orderModel;
