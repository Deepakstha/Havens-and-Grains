const bcrypt = require("bcrypt");
const db = require("../../model");
const jwt = require("jsonwebtoken");
const customErrorHandler = require("../../middleware/customErrorHandler");
const { createToken } = require("../../services/createToken");
const User = db.user;

// Signup Controller
exports.signup = async (req, res, next) => {
  const { fullName, email, password, username } = req.body;

  if (!fullName)
    return next(customErrorHandler(400, "full name is required!!"));
  if (!email) return next(customErrorHandler(400, "email is required!!"));
  if (!password) return next(customErrorHandler(400, "enter strong password!"));

  try {
    const userEmailExist = await User.findOne({ where: { email } });
    if (userEmailExist)
      return next(customErrorHandler(401, "Already register!!"));

    const hashedPassword = await bcrypt.hash(password, 10);
    User.create({
      fullName,
      username,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (!user) {
    return res.json({ message: "Invalid Email or Password" });
  }
  const validPassord = bcrypt.compareSync(password, user.password);
  if (!validPassord) {
    return res.json({ message: "Invalid Email or Password" });
  }
  // create token
  const token = createToken({ userId: user.id }, "1d");
  return res.json({ token });
};
