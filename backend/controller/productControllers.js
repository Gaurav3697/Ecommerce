// import productSchema from "../models/productModel.js"   //my code
import productSchema from "../models/productModel.js";

// Get all products
export const getAllProducts = async (req, res) => {
  const products = await productSchema.find();
  res.status(200).json({
    message: "Route is working",
    products,
  });
};

// Code to create product   --- admin
export const createProduct = async (req, res) => {
  const newProductData = req.body; //this is preffered way to create a new document firstly store req.body in a variable then use it
  console.log(req.body);
  try {
    const newProduct = await productSchema.create(newProductData);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  let product = await productSchema.findById(req.params.id);
  if (!product) {
    res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }
  product = await productSchema.findByIdAndUpdate(req.params.id, req.body);
  res.status(201).json({
    success: true,
    message: "Product updated successfully",
  });
};


export const deleteProduct = async (req, res) => {
  try {
    const productToDelete = await productSchema.findById(req.params.id);
    if (!productToDelete) {
      // Change the status code to 404 for "Not Found"
      return res.status(404).json({   //404 for not found will be better than 500 which means internal server error
        success: false,
        message: "Product not found",
      });
    }
    
    await productSchema.deleteOne({ _id: req.params.id });  //to delete the product deleteOne will be better 
    res.status(201).json({
      message: "Deleted successfully",
      productToDelete,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const productDetail = async (req, res) => {
  try {
    const productToShow = await productSchema.findById(req.params.id);
    if (!productToShow) {
      return res.status(404).json({ 
        success: false,
        message: "Product not found",
      });
    }
    
    res.status(201).json({
      message: "success",
      productToShow,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
