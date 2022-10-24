import "/public/style/descricao_produtos.css"

const DescricaoProduto = () => {

  return (
    <>
          <main>

              <div className="container-descricao">

                  <div className="img-pequenas">
                      <ul>
                          <li><img src="../public/image/console-personalizado.webp" alt=""/></li>
                          <li><img src="../public/image/console-personalizado.webp" alt=""/></li>
                          <li><img src="../public/image/console-personalizado.webp" alt=""/></li>
                      </ul>
                  </div>

                  <div className="imgem-produto">
                      <img src="../public/image/console-personalizado.webp" alt="Controle ps4 personalizado"/>
                  </div>

                  <div className="nome-produto">
                      <h3>Controle PS4 Personalizado</h3>
                      <small>SKU:0001</small>
                      <div className="preco-produto">
                          <div className="preco-normal">
                              <h5>De</h5>
                              <h4> R$ 355,00 </h4>
                          </div>
                          <div className="preco-promocional">
                              <h5>Por</h5>
                              <h4>R$ 285,00</h4>
                          </div>

                          <div className="quantidade-produto">
                              <form action="">
                                  <label for="quantidade">Quantidade</label>
                                  <input type="number" id="quantidade" className="form-control" name="quantidade" value="1" step="1" required/>
                                      <button type="submit" className="btn-comprar"><a href="#">Comprar</a></button>
                              </form>
                          </div>
                      </div>
                  </div>



              </div>
              <div className="descricao">
                  <div className="descricao-curta">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sapiente ab impedit consectetur quaerat. Aut consectetur in quidem pariatur excepturi impedit, necessitatibus iste error? Libero fugit accusantium quos quibusdam corporis?</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sapiente ab impedit consectetur quaerat. Aut consectetur in quidem pariatur excepturi impedit, necessitatibus iste error? Libero fugit accusantium quos quibusdam corporis?</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sapiente ab impedit consectetur quaerat. Aut consectetur in quidem pariatur excepturi impedit, necessitatibus iste error? Libero fugit accusantium quos quibusdam corporis?</p>
                  </div>
                  <div className="descricao-longa">
                      <h3>Informações de Produto</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sapiente ab impedit consectetur quaerat. Aut consectetur in quidem pariatur excepturi impedit, necessitatibus iste error? Libero fugit accusantium quos quibusdam corporis?</p>
                  </div>
              </div>
          </main>
    </>
  )
}

export default DescricaoProduto