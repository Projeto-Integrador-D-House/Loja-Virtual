import * as React from "react";
import { Button, Card, CardBody, Collapse } from "reactstrap";
import "/public/style/carrinho.css";


export default function PagamentosV() {
    const [state, setState] = React.useState({
        articleOpen: "",
        moreInfoOpen: false
    });
    const { article, moreInfoOpen } = state;

    const toggleMoreInfo = () => {
        setState((prevState) => ({
            article: "",
            moreInfoOpen: !prevState.moreInfoOpen
        }));
    };

    const handleArticleOpen = (article) => {
        setState((prevState) => ({
            ...prevState,
            article
        }));
    };

    return (
        <div className="app">

            <div className="section section-articles">
                <div className="articles-buttons">
                    <Button
                        className="article2-button"
                        color="primary"
                        onClick={() => handleArticleOpen("2")}
                    >
                        <h3>Cartão de Crédito</h3>
                    </Button>
                    <Button
                        className="article1-button"
                        color="primary"
                        onClick={() => handleArticleOpen("1")}
                    >
                        <h3>Boleto</h3>
                    </Button>
                    <Button
                        className="article1-button"
                        color="primary"
                        onClick={() => handleArticleOpen("0")}
                    >
                        <h3>Pix</h3>
                    </Button>
                </div>

                <Collapse isOpen={article === "2"}>
                    <Card className="card">
                        <CardBody className="card-body">
            

            <form>
                <label for="bandeira-cartao">Escolha a bandeira do seu cartão:</label>
                <select name="bandeira-cartao" id="">
                    <option value="">MasterCard</option>
                    <option value="">Visa</option>
                    <option value="">Hipercard</option>
                    <option value="">Elo</option>
                    <option value="">American Express</option>
                </select>

                <label for="numero-cartao">Número do Cartão:</label>
                <input type="text" name="numero-cartao"/>
                
                <label for="numero-cv">Código de Segurança:</label>
                <input type="text" name="numero-cv"/>

                <label for="numero-nome">Nome (conforme impresso no cartão): </label>
                <input type="text" name="numero-nome"/>

                <label for="numero-cpf">CPF (dono do cartão): </label>
                <input type="text" name="numero-cpf"/>

                <label for="pagamento-parcelas"> Escolha a quantidade de parcelas:</label>
                <select name="pagamento-parcelas" id="">
                    <option value="1">1x </option>
                    <option value="2">2x </option>
                    <option value="3">3x </option>
                    <option value="4">4x </option>
                    <option value="5">5x </option>
                    <option value="6">6x </option>
                    <option value="7">7x </option>
                    <option value="8">8x </option>
                    <option value="9">9x </option>
                    <option value="10">10x </option>
                    <option value="11">11x </option>
                    <option value="12">12x </option>
                    
                </select>

            </form>
                        </CardBody>
                    </Card>
                </Collapse>
                <Collapse isOpen={article === "1"}>
                    <Card className="card">
                        <CardBody className="card-body">
                            <div>
                                <h5>Pagamento com boleto <strong>R$ 1.177,21</strong></h5>
                            </div>
                            <small class="success badge">10% de desconto! Economize R$ 130,80</small>

                            <ul> 
                                <li>
                                    <strong>Data de vencimento:</strong>
                                    verifique a data de vencimento do boleto, que é de 3 dias úteis após ser gerado. Caso não seja pago até a data informada, o pedido será automaticamente cancelado.
                                </li>
                                <li>
                                    <strong>Prazo de entrega:</strong>
                                    é contado a partir da confirmação de pagamento pelo banco, o que pode levar até 2 dias úteis.
                                </li>
                                <li>
                                    <strong>Pagamento:</strong>
                                    pode ser feito pela internet ou telefone, utilizando o código de barras, ou diretamente em bancos, lotéricas e correios, apresentando o boleto impresso.
                                </li> 
                            </ul>

                            <h5>
                                <strong>Atenção:</strong>
                            </h5>
                            <ul>
                                <li>
                                    Não será enviado uma cópia impressa do boleto para seu endereço.
                                </li>
                                <li>
                                    Desabile o recurso anti pop-up caso você use.
                                </li>
                            </ul>

                         </CardBody>
                    </Card>
                </Collapse>
                <Collapse isOpen={article === "0"}>
                    <Card className="card">
                            <CardBody className="card-body">
                            <div class="column"> <i class="icon-pix"></i><strong>Pague com Pix</strong> </div>
                            <div class="row title-txt"> 
                                <div class="column"> 
                                    <h4>Pagamento rápido, fácil e seguro. 24 horas por dia.</h4> 
                                </div> 
                                <div class="column">
                                    <div class="pix-instruction">
                                        <ul>
                                            <li>
                                                <span class="index">1</span>
                                                Finalize a compra para obter os dados de pagamento
                                            </li>
                                            <li>
                                                <span class="index">2</span>
                                                Pague com o código ou QR Code PIX que será exibido após a compra
                                            </li>
                                            <li>
                                                <span class="index">3</span>
                                                Revise as informações e aguarde sua confirmação por email
                                            </li>
                                        </ul>
                                    </div> 
                                    <div class="pix-info"> 
                                        <i class="fa fa-info-circle"></i> 
                                        <span>Ao finalizar a compra, não será possível alterar o meio de pagamento selecionado.</span> 
                                    </div> 
                                </div> 
                            </div>
                            </CardBody>
                    </Card>
                </Collapse>
         </div>
         <div class="resumo-compra">
            <h3>Resumo do Pedido</h3>

            <table id="carrinho-item">
               <td>
                    <div>
                        <p>Subtotal:</p>
                        <p>R$99,90</p>
                    </div>

                    <div>
                        <p>Frete:</p>
                        <p>R$99,90</p>
                    </div>  
                    <div>
                        <p>Desconto do Cupom:</p>
                        <p> - R$10,00</p>
                    </div>
               </td>
               <tr class="footer">

                <td>Total de compra</td>
                <td>
                    <div id="total">R$ 189,70</div>
                </td>

            </tr>
            </table>
        </div>

    <section class="btn">

        <button class="btn-comprar">Finalizar Compra</button>

    </section>
         </div>
    );
}