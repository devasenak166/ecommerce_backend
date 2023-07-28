import Product from "../module/product_model.js";
import { verifyAuth, verifyAdmin, verifyToken } from "../route/tokenVerify.js";
export const createProduct =
  (verifyAdmin,
  (req, res) => {
    const newProduct = new Product(req.body)
      .save()
      .then(() => res.status(200).json({message:"Products added successfully"}))
      .catch((err) => res.status(404).json(err));
  });

export const getSingleproduct = (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => res.status(200).json({ message: "success", product }))
    .catch((err) => res.status(404).json(err));
};

// export const getCartSingleProduct=(req,res)=>
// {
//   const { id } = req.body;
//   Product.findById(id)
//     .then((product) => res.status(200).json({ message: "success", product }))
//     .catch((err) => res.status(404).json(err));
// }
export const getAllproducts = (req, res) => {
  Product.find()
    .then((product) => res.status(200).json({ message: "success", product }))
    .catch((err) => res.status(404).json(err));
};

export const productUpdate =
  (verifyAdmin,
  (req, res) => {
    const { id } = req.params;
    Product.findByIdAndUpdate(id, { $set: req.body }, { new: true })
      .then((updatedProduct) => res.status(200).json(updatedProduct))
      .catch((err) => res.status(404).json(err));
  });

export const productDelete =
  (verifyAdmin,
  (req, res) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id),
      then(() =>
        res
          .status(200)
          .json({ message: "product deleted success" })
          .catch((err) => res.status(404).json(err))
      );
  });
