import express from 'express';
import {getAllusercart,createCart,getUsercart,updateCart,cartDelete} from '../controllers/cartController.js';
const router=express.Router()
router.get('/',getAllusercart);
router.post('/create',createCart);
router.get('/:userid',getUsercart);
router.put('/:id',updateCart);
router.delete('/:id',cartDelete);
export default router;