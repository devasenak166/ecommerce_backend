import express from "express";
import {
  userUpdate,
  userDelete,
  getSingleuser,
  getAlluser,
} from "../controllers/userController.js";
const router = express.Router();
router.put("/:id", userUpdate);
router.delete("/:id", userDelete);
router.get("/:id", getSingleuser);
router.get("/", getAlluser);
export default router;
