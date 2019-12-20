const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { token } = req.headers;

  if (token) {
    const secret = process.env.JWT_SECRET || "Is it safe?";

    jwt.verify(token, secret, function (err, decodedToken) {
      if (err) {
        res.status(401).json({ message: "No shoes, no shirt.......no token" });
      } else {
        req.token = decodedToken;

        next();
      }
    });
  } else {
    res.status(400).json({ message: "You shall not pass!" });
  }
};
