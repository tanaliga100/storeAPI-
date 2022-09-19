// GET REQUEST
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    company: "marcos",
  });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({
    msg: "products testing route",
  });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};