require("dotenv").config();
const jwt = require("jsonwebtoken");

const controllers = {
  verificarToken() {
    const [req, res, next] = arguments;

    const decode = jwt.verify(req.get("Authorization"), process.env.JWT_SECRET);

    console.log(decode);
    if (decode.senha === "posso.passar") {
      console.log("autorizado");
      next();
    } else {
      res.status(401).json({ message: "não autorizado" });
    }
  },
};

module.exports = controllers;
