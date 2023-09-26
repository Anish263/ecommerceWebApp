// app.js
const express = require("express");
const app = express();
const productRouter = require("./routes/productRoute");

// Middleware to parse JSON requests
app.use(express.json());

// Use the productRouter for /api/v1 requests
app.use("/api/v1", productRouter);

module.exports = app;
