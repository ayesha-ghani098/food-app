import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    userId:{
      type: String,
      required: [true, "UserId Required"],
    },
    userId:{
      type: String,
      required: [true, "OrderId Required"],
    },
    username: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    number: {
      type: Number,
      required: [true, "Please provide number"],
    },
    address: {
      type: String,
      required: [true, "Please provide address"],
    },
    items: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    shippingMode:{
      type: String,
      required: [true, "Please provide shipping mode"],
    },
    paymentMode :{
      type: String,
      required: [true, "Please provide payment mode"],
    }
  },
  { timestamps: true }
);

const orderModel = mongoose.model("order", orderSchema);
export default orderModel;
