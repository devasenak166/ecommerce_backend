import express from 'express';
import {createProduct,getSingleproduct,getAllproducts,productDelete,productUpdate} from '../controllers/productController.js';
const router =express.Router();
router.post('/create',createProduct);
router.get('/:id',getSingleproduct);
// router.get('/cart/:id',getCartSingleProduct);
router.get('/',getAllproducts);
router.delete('/:id',productDelete);
router.put('/:id',productUpdate)
export default router;