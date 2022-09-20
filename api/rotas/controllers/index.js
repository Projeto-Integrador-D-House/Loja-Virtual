const controllers = {
  produtos() {
    const [, res] = arguments;
    res.send("Produtos");
  },
  home() {
    const [, res] = arguments;
    res.send("bem vindo a loja");
  },
};

module.exports = controllers;
