import React, { useEffect, useState } from "react";
import ProdutoWidget from "../components/ProdutoWidget";
import "/public/style/produtos.css";

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("/api/produtos")
      .then((prod) => prod.json())
      .then((prod) => {
        setProdutos(prod);
      });
  }, []);

  return (
    <>
      <aside className="sidebar">
        <nav className="main-menu">
          <span className="nav-text">Filtrar Por:</span>
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-globe fa-2x"></i>
                <span className="nav-text">Todos</span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="#">
                <i className=" fa-playstation fa"></i>
                <span className="nav-text">Consoles</span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="#">
                <i className="fas fa-ghost fa"></i>
                <span className="nav-text">Games</span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="#">
                <i className="fa fa-folder-open fa-2x"></i>
                <span className="nav-text">Controllers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-gamepad fa-2x"></i>
                <span className="nav-text">Acessorios</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-tag fa"></i>
                <span className="nav-text">A Venda</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-award fa 1x"></i>
                <span className="nav-text">Best Sellers</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      {
    produtos.length === 0 ?
    <div>
      CARREGANDO...
    </div> 
    :
      <div id="catalogo-produtos">
        {produtos.map((produto) => (
          <ProdutoWidget
            key={produto.id}
            produtoData={produto}
          />
        ))}
      </div>
      }
    </>
  );
}
export default Produtos;
