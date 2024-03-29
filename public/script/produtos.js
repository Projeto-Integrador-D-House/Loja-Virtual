const produtos = [
    {
        id: 1,
        title: "Cyper kid infinite",
        categoria: "jogos",
        preco: 200.00,
        img: '../public/image/produto_1.webp',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 2,
        title: "Chronosplit",
        categoria: "jogos",
        preco: 189.99,
        img: '../public/image/produto_2.webp',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 3,
        title: "Ice Dome: Exile",
        categoria: "jogos",
        preco: 175.00,
        img: '../public/image/produto_3.webp',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },

    {
        id: 4,
        title: "Ancient Souls",
        categoria: "jogos",
        preco: 190.00,
        img: '../public/image/produto_4.webp',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },

    {
        id: 5,
        title: "Kira And the Fading Islands",
        categoria: "jogos",
        preco:  129.99,
        img: '../public/image/produto_5.webp',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 6,
        title: "Dead At Last",
        categoria: "jogos",
        preco: 189.99,
        img: '../public/image/produto_6.webp',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 7,
        title: "Minecraft",
        categoria: "jogos",
        preco: 229.99,
        img: '../public/image/produto_7.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 8,
        title: "Witcher 2",
        categoria: "jogos",
        preco: 175.99,
        img: '../public/image/produto_8.jpg',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 9,
        title: "Witcher 2",
        categoria: "jogos",
        preco: 1431.00,
        img: '../public/image/produto_2.webp',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 10,
        title: "Jogo XXXX",
        categoria: "jogo",
        preco: 135.99,
        img: '../public/image/produto_4.webp',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 11,
        title: "Jogo ZZZZ",
        categoria: "jogo",
        preco: 199.99,
        img: '../public/image/produto_5.webp',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    },
    {
        id: 12,
        title: "Jogo WWWW",
        categoria: "jogo",
        preco: 276.99,
        img: '../public/image/produto_6.webp',
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nulla maiores quis. Quasi quo possimus exercitationem, repudiandae voluptatum odio magnam quam"
    }
];

const produtosContainer = document.querySelector('#catalogo-produtos');

const formatter = Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits:2,
})

function render(produto){
    let lista = "";

        produtos.forEach((produto) => {
           lista += `<article class="listaProdutos">
           <img src='${produto.img}' class="produto-img" alt='${produto.title}'>
           <div class="titulo-preco">
               <section>
                   <h4 class="nome-produto">${produto.title}</h4>
                   <h4 class="preco">${formatter.format(produto.preco)}</h4>
               <section>
               
                           <button type="submit" class="btn-comprar">compar</button>
           </div>
           </article>`
        });

        produtosContainer.innerHTML= lista
    };
    
    render();
    

    
