import mongoose from "mongoose";
const { Schema } = mongoose;
const CartSchema = new Schema(
  {
    // userId:
    // {
    //    type: String,
    //    required: true
    //   },

    productId: {
      type: String,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);
const Cart = mongoose.model("Cart", CartSchema);
export default Cart;
