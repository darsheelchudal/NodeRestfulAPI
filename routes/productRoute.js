import express from "express";
import { Product } from "../models/productModel.js";
import {
  getProduct,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

//homepage
router.get("/", getProduct);

//get single product
router.get("/:id", getSingleProduct);

//Create product
router.post("/", createProduct);

//Update aproduct
router.put("/:id", updateProduct);

//delete product
router.delete("/:id", deleteProduct);

export default router;
