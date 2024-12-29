const Order = require("../Orders/orderModel");

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const saveOrder = await newOrder.save();
    res.status(200).send(saveOrder);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating order", error: error });
  }
};
const getOrderByEmail = async (req, res) => {
  console.log("hiii");
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    if (!orders) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "failed to fetch order", error: error });
  }
};
module.exports = {
  createOrder,
  getOrderByEmail,
};
