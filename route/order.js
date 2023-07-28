import Order from "../module/Order.js";
import express from 'express';
import {createOrder,updateOrder,deleteOrder,getUserorder,getAlluserorder} from '../controllers/orderController.js'
const router =express.Router();

router.post("/", createOrder)

router.put("/:id", updateOrder);

router.delete("/:id",deleteOrder);

router.get("/:userId", getUserorder);

router.get("/", getAlluserorder);

export default router;