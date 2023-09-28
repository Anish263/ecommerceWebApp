// routes/productsRoute.js
const express = require("express");
const router = express.Router();
const Product = require('../Model/productModel');

const { getAllProducts, createProduct, updateProduct } = require("../controller/productContoller");

router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);
router.route("/product/:id").put(updateProduct);

module.exports = router;
