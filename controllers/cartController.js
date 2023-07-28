import { verifyAuth, verifyAdmin, verifyToken } from "../route/tokenVerify.js";
import Cart from "../module/Cart.js";
export const getAllusercart =
  (verifyAuth,
  (req, res) => {
    Cart.find()
      .then((products) =>
        res.status(200).json({ message: "success", products })
      )
      .catch((err) => res.status(404).json(err));
  });

export const createCart =
  (verifyToken,
  (req, res) => {
    const newCart = new Cart(req.body)
      .save()
      .then(() =>
        res.status(200).json({ message: "successfully added the user cart" })
      )
      .catch((err) => res.status(400).json(err));
  });

export const getUsercart =
  (verifyAuth,
  (req, res) => {
    const { id } = req.params;
    Cart.findOne(id)
      .then((product) => res.status(200).json({ message: "success", product }))
      .catch((err) => res.status(400).json(err));
  });

export const updateCart =
  (verifyAuth,
  (req, res) => {
    const { id } = req.params;
    Cart.findByIdAndUpdate(id, { $set: req.body }, { new: true })
      .then((updatedCart) => res.status(200).json(updatedCart))
      .catch((err) => res.status(404).json(err));
  });

export const cartDelete =
  (verifyAuth,
  (req, res) => {
    const { id } = req.params;
    Cart.findByIdAndDelete(id),
      then(() =>
        res
          .status(200)
          .json({ message: "prodCart deleted success" })
          .catch((err) => res.status(404).json(err))
      );
  });
