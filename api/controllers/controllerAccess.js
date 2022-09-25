require("dotenv").config();
const jwt = require("jsonwebtoken");
const controllers = {
  autenticar() {
    const [req, res] = arguments;

    const token = jwt.sign(req.body, process.env.JWT_SECRET);

    res.json(token);
  },
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
