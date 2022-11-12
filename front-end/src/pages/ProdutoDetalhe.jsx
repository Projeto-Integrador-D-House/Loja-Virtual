import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "/public/style/descricao_produtos.css";
const ProdutoDetalhe = () => {
  const [product, setProduct] = useState({});
  const param = useParams();
  useEffect(() => {
    fetch(`/api/produto/${param.id}`)
      .then((produto) => produto.json())
      .then((produtodata) => {
        setProduct(produtodata);
      });
  }, []);
  // console.log(p)
  return (
    <main>
      <div className="container-descricao">
        <div className="img-pequenas">
          <ul>
            <li>
              <img
                src="../public/image/console-personalizado.webp"
                alt=""
              />
            </li>
            <li>
              <img
                src="../public/image/console-personalizado.webp"
                alt=""
              />
            </li>
            <li>
              <img
                src="../public/image/console-personalizado.webp"
                alt=""
              />
            </li>
          </ul>
        </div>

        <div className="imgem-produto">
          {/* <img src="https://i.ibb.co/qsgNT0q/console-personalizado.png" alt="Controle ps4 personalizado" /> */}
          {product.images?.map((image) => (
            <img src={image} />
          ))}
        </div>

        <div className="nome-produto">
          <h3>{product.nome}</h3>
          <small>SKU:{product.EAN}</small>
          <div className="preco-produto">
            <div className="preco-normal">
              <h5>De</h5>
              <h4> R$ {product.preco} </h4>
            </div>
            <div className="preco-promocional">
              <h5>Por</h5>
              <h4>R$ {product.preco - product.preco / 15}</h4>
            </div>

            <div className="quantidade-produto">
              <form action="">
                <label htmlFor="quantidade">Quantidade</label>
                <input
                  type="number"
                  id="quantidade"
                  className="form-control"
                  name="quantidade"
                  step="1"
                  required
                />
                <button
                  type="submit"
                  className="btn-comprar"
                >
                  Comprar
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>

        <div className="descricao">
          <div className="descricao-curta">
            <h3>Informações de Produto</h3>
            <p>{product.descricao}</p>
            <details className="descricao-longa">
              <summary>
                <h3> mais informações</h3>
              </summary>
              <p>
                {product.descricao}
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                sapiente ab impedit consectetur quaerat. Aut consectetur in
                quidem pariatur excepturi impedit, necessitatibus iste error?
                Libero fugit accusantium quos quibusdam corporis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                sapiente ab impedit consectetur quaerat. Aut consectetur in
                quidem pariatur excepturi impedit, necessitatibus iste error?
                Libero fugit accusantium quos quibusdam corporis?
              </p>
            </details>
          </div>
        </div>
    </main>
  );
};
export default ProdutoDetalhe;
