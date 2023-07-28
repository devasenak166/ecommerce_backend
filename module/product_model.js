import mongoose from "mongoose";
const {Schema} =mongoose;
const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categories: {
    type: Array,
  },
  size: {
    type: Array,
  },
  color: {
    type: Array,
  },
});
const Product = mongoose.model("product", productSchema);
export default Product;
