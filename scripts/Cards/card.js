export default function criaCorpoCard(prod){
    // Criando o card
    const corpoCard = document.createElement('div')
    const tela = document.createElement('div')
    const img = document.createElement('img')
    const campCartCora = document.createElement('div')
    const spanCart = document.createElement('span')
    const spanCora = document.createElement('span')
    const cart = document.createElement('img')
    const cora = document.createElement('img')
    const titulo = document.createElement('div')
    const campAvaliar = document.createElement('div')
    const estrelas = document.createElement('img')
    const quantAvalia = document.createElement('p')
    const campPreco = document.createElement('div')
    const moeda = document.createElement('p') 
    const preco = document.createElement('span')

    // Organizando elementos do cards
    // Tela
    corpoCard.appendChild(tela)
    tela.appendChild(img)
    tela.appendChild(campCartCora)
    campCartCora.appendChild(spanCora)
    campCartCora.appendChild(spanCart)
    spanCart.appendChild(cart)
    spanCora.appendChild(cora)
    

    // Titulo
    corpoCard.appendChild(titulo)

    // Avaliação
    corpoCard.appendChild(campAvaliar)
    campAvaliar.appendChild(estrelas)
    campAvaliar.appendChild(quantAvalia)

    // Preço
    corpoCard.appendChild(campPreco)
    campPreco.appendChild(moeda)
    campPreco.appendChild(preco)

    // Estilizando os elementos
    corpoCard.classList.add('corpoCard')
    tela.classList.add('screen')
    titulo.classList.add('tituloCard')
    campAvaliar.classList.add('avaliar')
    campPreco.classList.add('preco')
    spanCart.classList.add('iconCart')
    spanCora.classList.add('iconCoracao')

    // formatando o preco para txt
    let precoTxt = prod.preco.toFixed(2)
    if(precoTxt[1] === '.'){
       precoTxt = prod.preco.toFixed(3);
    }

    // Adicionando Conteudo do produto
    img.src = prod.imagem
    titulo.innerText = prod.nome
    moeda.innerText = 'R$'
    preco.innerHTML = precoTxt
    cart.src = "Imagem/Icones/add_shopping_cart.svg"
    cora.src = "Imagem/Icones/CoracaoVazio.svg"
    estrelas.src = "Imagem/Icones/FiveStars.svg"
    quantAvalia.innerText = "Sem Avaliações"
  
    return corpoCard
}
