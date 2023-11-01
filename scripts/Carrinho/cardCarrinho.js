export default function criaListaCart(card){
    // Criando cards da aba Carrinho
    const li = document.createElement('li')
    const divContainer = document.createElement('div')
    const divImg = document.createElement('div')
    const imgProduto = document.createElement('img')
    const divQuanTitulo = document.createElement('div')
    const titulo = document.createElement('p')
    const quantContainer= document.createElement('div')
    const buttonMenos = document.createElement('button')
    const imgMenos = document.createElement('img')
    const spanNumber = document.createElement('span')
    const buttonMais = document.createElement('button')
    const imgMais = document.createElement('img')
    const preco = document.createElement('p')
    const spanIconFechar = document.createElement('span')
    const imgFechar = document.createElement('img')

    // Organizando elementos
    li.appendChild(divContainer)
    divContainer.appendChild(divImg)
    divImg.appendChild(imgProduto)
    divContainer.appendChild(divQuanTitulo)
    divQuanTitulo.appendChild(titulo)
    divQuanTitulo.appendChild(quantContainer)
    quantContainer.appendChild(buttonMenos)
    buttonMenos.appendChild(imgMenos)
    quantContainer.appendChild(spanNumber)
    quantContainer.appendChild(buttonMais)
    buttonMais.appendChild(imgMais)
    divContainer.appendChild(preco)
    divContainer.appendChild(spanIconFechar)
    spanIconFechar.appendChild(imgFechar)

    //Aplicando as classes/id
    li.classList.add('containerCardCarrinho')
    divContainer.classList.add('card')
    divImg.classList.add('img')
    divQuanTitulo.classList.add('tituloQuantidade')
    divQuanTitulo.classList.add('QuantCart')
    buttonMenos.classList.add('buttonMenos')
    spanNumber.classList.add('spanNumber')
    buttonMais.classList.add('buttonMais')
    spanIconFechar.classList.add('iconFechar')
    spanIconFechar.classList.add('iconFecharCart')
    titulo.classList.add('textCart')
    
    // Adicionando Conteúdo aos elementos
    imgProduto.src = card.querySelector('.screen > img').src
    titulo.innerText = card.querySelector('.corpoCard > .tituloCard').innerText
    imgMenos.src = 'Imagem/Icones/minus-solid.svg'
    spanNumber.innerText = 1
    imgMais.src = 'Imagem/Icones/plus-solid.svg'
    preco.innerText += card.querySelector('.corpoCard > .preco > span').innerText
    imgFechar.src += 'Imagem/Icones/close_FILL0_wght400_GRAD0_opsz24.svg'

    return li
}