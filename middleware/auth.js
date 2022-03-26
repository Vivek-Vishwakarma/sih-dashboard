const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.status(401).send("auth denied");
    }
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next()
  } catch (error) {
    res.send("error occoured");
  }
};

module.exports = auth