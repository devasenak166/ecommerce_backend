import { verifyToken, verifyAuth, verifyAdmin } from "../route/tokenVerify.js";
import Order from "../module/Order.js";

export const createOrder =
  (verifyToken,
  (req, res) => {
    const newOrder = new Order(req.body)
      .save()
      .then((savedOrder) => res.status(200).json(savedOrder))
      .catch((err) => res.status(500).json(err));
  });

export const updateOrder =
  (verifyAdmin,
  (req, res) => {
    const { id } = req.params;
    Order.findByIdAndUpdate(id, { $set: req.body }, { new: true })
      .then((updatedOrder) => res.status(200).json(updatedOrder))
      .catch((err) => res.status(500).json(err));
  });

//DELETE
export const deleteOrder =
  (verifyAdmin,
  (req, res) => {
    Order.findByIdAndDelete(req.params.id)
      .then(() => res.status(200).json("Order has been deleted..."))
      .catch((err) => res.status(500).json(err));
  });

export const getUserorder =
  (verifyAuth,
  (req, res) => {
    const { id } = req.params;
    Order.find(id)
      .then((orders) => res.status(200).json(orders))
      .catch((err) => res.status(500).json(err));
  });

// //GET ALL
export const getAlluserorder =
  (verifyAdmin,
  (req, res) => {
    Order.find()
      .then((orders) => res.status(200).json(orders))
      .catch((err) => res.status(500).json(err));
  });
