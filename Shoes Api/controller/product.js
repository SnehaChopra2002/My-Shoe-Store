const Product = require("../models/products");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  // const products = await Product.find(req.query);
  const { title,company,category,color,sort,selected } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = { $regex: company, $options: "i" };
  }
  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }
  if (category) {
    queryObject.category = { $regex: category, $options: "i" };
  }
  if (color) {
    queryObject.color = { $regex: color, $options: "i" };
  }
  console.log(queryObject)
  let result = Product.find(queryObject);
  // sort
  if (sort) {
    console.log(sort);
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  }
  // select
  if (selected) {
    const selectList = selected.split(",").join(" ");
    result = result.select(selectList);
  }
  const limit = Number(req.query.limit) ;
  const page = Number(req.query.page) || 1;
  result=result.limit(limit)

  const products = await result;
  res.status(200).json(products);
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json(product);
};

const getSingleProduct = async (req, res) => {};

const deleteProduct = async (req, res) => {
  const { name: prod_name } = req.params;
  console.log(prod_name);
  const deletedProd = await Product.findOneAndDelete({ name: prod_name });
  res.status(200).json(deletedProd);
};

const updateProduct = (req, res) => {};

module.exports = {
  getAllProductsStatic,
  getProduct,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
