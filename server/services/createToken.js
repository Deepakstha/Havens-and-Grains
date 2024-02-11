exports.createToken = (user, expiryTime) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: expiryTime,
  });
};
