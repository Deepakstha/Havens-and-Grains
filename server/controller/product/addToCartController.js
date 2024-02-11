const AddToCart = require("../../model").addToCart;

exports.addToCartController = async (req, res) => {
  const { productId, userId, quantity } = req.body;
  if (!productId || !userId || !quantity) {
    return res
      .status(400)
      .json({ message: "Please provide all filds productID, userID,quantity" });
  }
  const cart = await AddToCart.findOne({ where: { productId, userId } });
  if (cart) {
    return res
      .status(400)
      .json({ message: "This item is already in your cart." });
  }
  const newCart = await AddToCart.create({
    productId,
    userId,
    quantity: parseInt(quantity),
  });
  res.json({ message: "Added To the Cart", newCart });
};
