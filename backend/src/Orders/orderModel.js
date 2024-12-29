const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      city: {
        type: String,
        required: true,
      },
      country: String,
      state: String,
      zipcode: String,
    },

    phone: {
      type: Number,
      require: true,
    },
    productIds: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const order = mongoose.model("Order", orderSchema);
module.exports = order;
