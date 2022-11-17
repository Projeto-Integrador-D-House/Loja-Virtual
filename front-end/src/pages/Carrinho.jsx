import React from 'react'
import "/public/style/carrinho.css";
const Carrinho = () => {
    
    return (

    <>
    
    <main id="container-carrinho">
        <div id="conteudo-carrinho">
            <h2>Meu Carrinho</h2>

            <table id="carrinho-item">
                
                <thead>
                    <tr>
                        <th colspan="2">Item</th>
                    <th>
                        Preço
                    </th>
                        <th>
                            Quantidade
                        </th>
                    </tr>
                </thead>
                <tbody className="produtos-carrinho">
                    <td className="image">
                        <img src="../public/image/acessorio_1.webp" alt="Acessorio - teclado" className="cover"/>
                    </td>

                    <td>
                        <div className="produto-item">
                            <a href="#" className="produto-link"> Teclado Game - RGBA </a>
                            <a href="#" className="fabricante-link">XXXX</a>
                        </div>

                        <div>
                            <input type="checkbox" id="presente"/>
                            <label for="gift">Embalagem para presente</label>
                        </div>
                        <div>
                            <a href="#" className="delete-item">Tirar do carrinho</a>
                        </div>
                    </td>

                    <td className="small">
                        <div className="preco">R$ 99,90</div>
                    </td>
                    <td className="small">
                        <input className="quantidade" type="number"  size="2" maxlength="2" min="1" max="10" step="1"/>
                    </td>
                </tbody>
            </table>
        </div>

        <div className="resumo-compra">
            <h3>Resumo do Pedido</h3>
            
            <table id="resumo">
                <tr className="subtotal">
                    <td>Subtotal:</td>
                    <td className="valorSubtotal">R$99,90</td>
                </tr>
            
                <tr className="frete">
                    <td>Frete:</td>
                    <td className="valorFrete">R$99,90</td>
                </tr>
            
                <tr className="desconto">
                    <td>Desconto do Cupom:</td>
                    <td className="valorDesconto"> - R$10,00</td>
                </tr>
                <tr className="footer">
            
                    <td>Total de compra</td>
                    <td colspan="2">
                        <div id="total">R$ 189,70</div>
                    </td>
            
                </tr>
            </table>
        </div>

    </main>

    <section id="incluso-pedido">
        <div id="cupom-desconto">
            <label for="codigo-desconto">Insira o código promocional</label>
            <input type="text" name="codigo-desconto" id="cod-desconto"/>
            <button type="submit" className="btn-geral">Enviar</button>
        </div>

        <div id="calcular-frete">
            <label for="info-cep">Informe seu CEP:</label>
            <input type="text" name="info-cep" id="cod-cep"/>
            <button type="submit" className="btn-geral">Enviar</button>
            <small><a href="#">Não sabe o CEP, Clique aqui!</a></small>
        </div>
    </section>

    <section className="btn">

        <button className="btn-geral">Continuar Comprando</button>
        <button className="btn-comprar">Finalizar Compra</button>

    </section>
    
    </>
  )
}

export default Carrinho
