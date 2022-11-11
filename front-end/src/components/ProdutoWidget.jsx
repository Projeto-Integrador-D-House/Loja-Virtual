import React from "react";
import { Link } from "react-router-dom";

function ProdutoWidget({produtoData}) {


    return (
            <article className="listaProdutos">
            {produtoData.images?.map((image) => (
              <img src={image} className="produto-img" key={produtoData.id}/>
            ))}
            <div className="titulo-preco">
              <section>
                <h4 className="nome-produto"><Link to={`/produto/${produtoData.id}`}>{produtoData.nome}</Link></h4>
                <h4 className="preco">{produtoData.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
              </section>
              <button className="btn-comprar">compar</button>
            </div>
          </article>
    )
}
export default ProdutoWidget