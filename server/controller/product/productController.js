const Product = require("../../model").product;

// Add product
exports.addProduct = async (req, res) => {
  const { productName, productDescription, price, stock } = req.body;
  const productImage = req.files.productImage[0].fieldname;

  const productNameExist = await Product.findOne({
    where: {
      productName,
    },
  });
  if (productNameExist) {
    return res
      .status(400)
      .json({ message: "Product already Exist Please update stoke!" });
  }
  if (!productImage) {
    return res.status(400).json({ message: "Please Upload Product Image" });
  }
  const newProduct = Product.create({
    productName,
    productDescription,
    price,
    stock,
    productImage,
  });
  return res.json({ product: newProduct });
};

// get all products
exports.displayAllProducts = async (req, res) => {
  const allProducts = await Product.findAll();
  return res.json({ allProducts });
};

//Display One product
exports.displayOneProduct = async (req, res) => {
  const { producId } = req.body;
  const oneProduct = await Product.findByPk(producId);
  return res.json({ product: oneProduct });
};

// Delete Product by id
exports.deleteProduct = async (req, res) => {
  const { productId } = req.body;
  const product = await Product.findByPk(productId);
  if (!product) {
    return res.status(400).json({ message: "No product" });
  }
  const deletedProduct = await Product.destroy({
    where: { id: productId },
  });
  if (!deletedProduct) {
    return res.status(400).json({ message: "Faild to Delete" });
  }
  return res.json({ message: "Product Deleted", deletedProduct });
};

// update product by id
exports.updateProduct = async (req, res) => {
  const { producId, productName, productDescription, stock, price } = req.body;
  const productImage = req.files.productImage[0].fieldname;
  const product = await Product.findOne({ where: { id: producId } });
  if (!product) {
    return res.status(400).json({ message: "No product Found" });
  }
  if (productName) {
    product.productName = productName;
  }
  if (productDescription) {
    product.productDescription = productDescription;
  }
  if (stock) {
    product.stock = stock;
  }
  if (price) {
    product.price = price;
  }
  if (productImage) {
    product.productImage = productImage;
  }
  product.save();
  return res.status(200).json({ message: "Product Updated!", product });
};
