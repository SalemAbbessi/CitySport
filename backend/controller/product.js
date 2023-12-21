const Product = require("../models/product.js");

// cotroller for getallproducts
exports.getallProducts = async (req, res) => {
  try {

    const products = await Product.find()
    return res.status(200).json({
        payload:products
    });

  } catch (error) {
    console.error(error);
    res.status(500),
      json({
        message: "Error in getallProducts",
      });
  }
};

// cotroller for creatproducts
exports.creatProduct = async (req, res) => {
  try {
    
  } catch (error) {
    console.error(error);
    res.status(500),
      json({
        message: "Error in creatProduct",
      });
  }
};

// cotroller for readproducts
exports.readProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500),
      json({
        message: "Error in readProduct",
      });
  }
};

// cotroller for deleteproducts

exports.deleteProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500),
      json({
        message: "Error in deleteProduct",
      });
  }
};
