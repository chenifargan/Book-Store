const jwt = require("jsonwebtoken");

const verifyAdminToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Token has expired. Please log in again." });
      }
      return res.status(403).json({ message: "Invalid or expired token." });
    }

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Insufficient permissions." });
    }

    req.user = decoded;
    next();
  });
};

module.exports = verifyAdminToken;
