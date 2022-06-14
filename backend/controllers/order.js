// @desc    Create Order
export const createOrder = async (req, res, next) => {
  const { username, number, email, address, items, total } = req.body;

  try {
    const order = await Order.create({
      username,
      email,
      number,
      address,
      items,
      total,
    });

    res.status(200).json({ success: true, data: "Order has been placed" });
  } catch (err) {
    next(err);
  }
};
