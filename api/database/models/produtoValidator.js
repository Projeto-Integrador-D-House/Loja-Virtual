const z = require("zod");
const validarProduto = z.object({
  nome: z.string(),
  descricao: z.string(),
  categoria: z.string(),
  EAN: z.string(),
  preco: z.number({ invalid_type_error: "por favor insira um valor" }),
});

module.exports = validarProduto;
