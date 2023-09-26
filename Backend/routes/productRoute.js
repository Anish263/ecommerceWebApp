// routes/productsRoute.js
const express = require("express");
const router = express.Router();
const { getAllProducts } = require("../controller/productContoller");

router.route("/products").get(getAllProducts);

module.exports = router;
