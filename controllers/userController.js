import user from "../module/Auth.js";
import CryptoJS from "crypto-js";
import { verifyAuth, verifyAdmin, verifyToken } from "../route/tokenVerify.js";
export const userUpdate =
  (verifyAuth,
  (req, res) => {
    if (req.params.password) {
      req.body.password = CryptoJs.AES.encrypt(
        password,
        process.env.CRYPTO_PASS
      ).toString();
    }
    const { id } = req.params;
    user
      .findByIdAndUpdate(id, { $set: req.body }, { new: true })
      .then((updatedUser) => res.status(200).json(updatedUser)).catch((err)=>res.status(404).json(err));
  });

export const userDelete =
  (verifyAuth,
  (req, res) => {
    const { id } = req.params;
    user
      .findByIdAndDelete(id)
      .then(() => res.status(200).json("user deleted successful!.."))
      .catch((err) => res.status(404).json(err));
  });

export const getSingleuser =
  (verifyAdmin,
  (req, res) => {
    const { id } = req.params;
    user
      .findById(id)
      .then((user) => {
        const { password, ...others } = user._doc;
        res.status(200).json({ message: "true", ...others });
      })
      .catch((error) => res.status(404).json(error));
  });

export const getAlluser =
  (verifyAdmin,
  (req, res) => {
    user
      .find()
      .then((users) => res.status(200).json({ message: "true", users }));
  });
