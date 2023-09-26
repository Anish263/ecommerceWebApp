// controllers/productsController.js
const getAllProducts = (req, res) => {
    const products = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
    ];
    res.status(200).json(products);
  };
  
  module.exports = { getAllProducts };
  