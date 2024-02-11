module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      defaultValue: "user",
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.TEXT,
      defaultValue: "/uploads/profileImage/prifile.png",
    },
  });
  return User;
};
