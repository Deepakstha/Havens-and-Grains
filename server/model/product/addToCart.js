module.exports = (sequelize, DataTypes) => {
  const AddToCart = sequelize.define("addToCart", {
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  });
  return AddToCart;
};
