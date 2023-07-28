//kL1i3FivWRWhDTlR
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./route/auth.js";
import usersRoute from "./route/users.js";
import productRoute from "./route/product.js";
import cartRoute from "./route/cartRoute.js";
import orderRoute from './route/order.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.MONGO_URL;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// app.use("/", (req, res) => {
//   res.send("hello mongodb ....");
// });
app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/products", productRoute);
app.use("/carts", cartRoute);
app.use("/orders",orderRoute);
mongoose
  .connect(
    CONNECTION_URL,
    { useUnifiedTopology: true },
    { useNewUrlParser: true }
  )
  .then(() => app.listen(PORT, () => console.log("Db connected successfully")))
  .catch((error) => console.log(error));
