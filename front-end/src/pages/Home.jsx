import React from "react";
import "/public/style/home.css"

function Home(){


return (<>
    <main className="conteudo-principal">
        <div className="banner-home">
            <div className="img-banner">
                <img src="/image/call-of-duty.jpg" alt="" srcSet=""/>
                <div className="img2-banner">
                    <img src="/image/icon0.jfif" alt="" srcSet=""/>
                </div>
                <div className="texto-banner">
                    <h6>Jogue Agora</h6>
                    <h2>Call of Duty</h2>
                    <h4>Modern Warefare 2</h4>
                    <p>Disponível para PC  Console</p>
                    <button type="submit" className="btn-comprar">Comprar</button>
                </div>
            </div>
            
        </div>
        <section className="mais-vendidos">
            <div className="mais-vendidos_titulo">
                <div className="mais-vendidos_titulo_nome">
                    <h3>Mais Vendidos</h3>
                </div>
                <div className="mais-vendidos__btn">
                    <button className="btn-geral">Ver todos</button>
                </div>
            </div>
            <div className="mais-vendidos_produtos">
                <div className="mais-vendidos_produtos_1">
                    <div>
                        <img src="/image/produto_1.webp" alt="" sizes="" srcSet=""/>
                        <p>Cyper kid infinite</p>
                        <p>R$ 200</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
                <div className="mais-vendidos_produtos_1">
                    <div>
                        <img src="/image/produto_2.webp" alt="" sizes="" srcSet=""/>
                        <p>Chronosplit</p>
                        <p>R$ 189,99</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
                <div className="mais-vendidos_produtos_1">
                    <div>
                        <img src="/image/produto_3.webp" alt="" sizes="" srcSet=""/>
                        <p>Ice Dome: Exile</p>
                        <p>R$ 175,00</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
                <div className="mais-vendidos_produtos_1">
                    <div>
                        <img src="/image/produto_4.webp" alt="" sizes="" srcSet=""/>
                        <p>Ancient Souls</p>
                        <p>R$ 190,00</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
            </div>
            </section>
            <section className="categorias">
                <div className="categorias_titulo">
                    <div className="categorias_titulo_nome">
                        <h3>categorias</h3>
                    </div>
                    <div className="categorias__btn">
                        <button className="btn-geral">Ver todos</button>
                    </div>
                </div>
                <div className="categorias_produtos">

                    <div className="categoria_produtos_1">
                        <a href="#">
                            <div>
                                <img src="/image/categoria_2.jpg" alt="" sizes="" srcSet=""/>
                                <p>Console</p>
                            </div>
                        </a>
                    </div>

                    <div className="categoria_produtos_1">
                        <a href="#">
                            <div>
                                <img src="/image/categoria_1.jpg" alt="" sizes="" srcSet=""/>
                                <p>Acessórios</p>
                            </div>
                        </a>
                    </div>

                    <div className="categoria_produtos_1">
                        <a href="#">
                            <div>
                                <img src="/image/categoria_3.jpg" alt="" sizes="" srcSet=""/>
                                <p>Crontoles</p>
                            </div>
                        </a>
                    </div>

                    <div className="categoria_produtos_1">
                        <a href="#">
                            <div>
                                <img className="categoria_jogos" src="/image/categoria_4.png" alt="" sizes="" srcSet=""/>
                                <p>Jogos</p>
                            </div>
                        </a>
                    </div>
                </div>
        </section>

        <section className="banner-desconto">
            <div className="banner-desconto_titulo">
                <div className="banner-desconto_titulo_nome">
                    <h3>Ofertas</h3>
                </div>
                <div className="banner-desconto__btn">
                    <button className="btn-geral">Ver todos</button>
                </div>
            </div>
            <div className="banner-desconto_jogos">
                <img src="/image/group_9.png" alt=""/>
                <div className="texto-banner_desconto">
                    <h4>Ofertas da Semana</h4>
                    <h2>10% OFF</h2>
                    <h4>Em todos os jogos</h4>
                    <button type="submit" className="btn-comprar">Comprar</button>
                </div>
            </div>
           
           
        </section>
        
        <section className="produtos_acessorios">
            <div className="produtos_acessorios_titulo">
                <div className="produtos_acessorios_titulo_nome">
                    <h3>Acessórios</h3>
                </div>
                <div className="produtos_acessorios__btn">
                    <button className="btn-geral">Ver todos</button>
                </div>
            </div>
            <div className="produtos_acessorios_produtos">
                <div className="produtos_acessorios_produtos_1">
                    <div>
                        <img src="/image/acessorio_1.webp" alt="" sizes="" srcSet=""/>
                        <p>Cyper kid infinite</p>
                        <p>R$ 200</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
                <div className="produtos_acessorios_produtos_1">
                    <div>
                        <img src="/image/acessorio_7.webp" alt="" sizes="" srcSet=""/>
                        <p>Chronosplit</p>
                        <p>R$ 189,99</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
                <div className="produtos_acessorios_produtos_1">
                    <div>
                        <img src="/image/acessorio_3.webp" alt="" sizes="" srcSet=""/>
                        <p>Ice Dome: Exile</p>
                        <p>R$ 175,00</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
                <div className="produtos_acessorios_produtos_1">
                    <div>
                        <img src="/image/acessorio_5.webp" alt="" sizes="" srcSet=""/>
                        <p>Ancient Souls</p>
                        <p>R$ 190,00</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
            </div>
        </section>

        <section className="banner_desconto_compras">
            <a href="http://">
                <div className="banner-desconto_compras_valor">
                    <img src="/image/Slider.jpg" alt=""/>
                    <div className="texto-banner_desconto_compras">
                        <h2>Economize</h2>
                        <h4>Compras a partir de R$ 500 ganhe 20% de desconto.</h4>
                    </div>
                </div>
            </a>
        </section>

        <section className="produtos_acessorios">
            <div className="produtos_acessorios_titulo">
                <div className="produtos_acessorios_titulo_nome">
                    <h3>Jogos mais Procurados</h3>
                </div>
                <div className="produtos_acessorios__btn">
                    <button className="btn-geral">Ver todos</button>
                </div>
            </div>
            <div className="produtos_acessorios_produtos">

                <div className="produtos_acessorios_produtos_1">
                    <div>
                        <img src="/image/produto_1.webp" alt="" sizes="" srcSet=""/>
                        <p>Cyper kid infinite</p>
                        <p>R$ 200</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>

                <div className="produtos_acessorios_produtos_1">
                    <div>
                        <img src="/image/produto_2.webp" alt="" sizes="" srcSet=""/>
                        <p>Chronosplit</p>
                        <p>R$ 189,99</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>

                <div className="produtos_acessorios_produtos_1">
                    <div>
                        <img src="/image/produto_3.webp" alt="" sizes="" srcSet=""/>
                        <p>Ice Dome: Exile</p>
                        <p>R$ 175,00</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>

                <div className="produtos_acessorios_produtos_1">
                    <div>
                        <img src="/image/produto_4.webp" alt="" sizes="" srcSet=""/>
                        <p>Ancient Souls</p>
                        <p>R$ 190,00</p>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
            </div>
        </section>

        <section className="home-newsletter">
            <div className="container-home-newsletter">
                <h2 className="texto_home-newsletter">Quer ser o primeiro a saber dos lançamentos e promoções?</h2>
                <h3 className="subtexto_home-newsletter">Inscreva-se aqui!! </h3>
                <form action="" className="form_newsletter">
                    <input className="email_newsletter" type="email" placeholder="Cadastre seu e-mail aqui?"/>
                    <button type="submit" className="btn-newsletter">Enviar</button>
                </form>
            </div>
        </section>

        <section className="banner-final_home">
            <div>
                <img src="/image/banner2_home.jpg" alt=""/>
            </div>
        </section>
    </main>
</>)
}

export default Home