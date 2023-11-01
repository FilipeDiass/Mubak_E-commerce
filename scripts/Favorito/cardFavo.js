export default function criaListaFavo(card){
    // Criando cards da aba favoritos
    const li = document.createElement('li')
    const divContainer = document.createElement('div')
    const divImg = document.createElement('div')
    const imgProduto = document.createElement('img')
    const divQuanTitulo = document.createElement('div')
    const titulo = document.createElement('p')
    const quantContainer= document.createElement('div')
    const buttonAdc = document.createElement('button')
    const spanIconCart = document.createElement('span')
    const imgCart = document.createElement('img')
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
    quantContainer.appendChild(buttonAdc)
    buttonAdc.appendChild(spanIconCart)
    spanIconCart.appendChild(imgCart)
    divContainer.appendChild(preco)
    divContainer.appendChild(spanIconFechar)
    spanIconFechar.appendChild(imgFechar)

    //Aplicando as classes/id
    li.classList.add('containerCardFavo')
    divContainer.classList.add('card')
    divImg.classList.add('img')
    divQuanTitulo.classList.add('tituloQuantidade')
    divQuanTitulo.classList.add('QuantFavo')
    spanIconFechar.classList.add('iconFechar')
    spanIconFechar.classList.add('iconFecharFavo')
    buttonAdc.classList.add('adiciona')

    // Adicionando Conteúdo aos elementos
    imgProduto.src = card.querySelector('.screen > img').src
    titulo.innerText = card.querySelector('.corpoCard > .tituloCard').innerText
    imgCart.src = 'Imagem/Icones/add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'
    buttonAdc.innerHTML += 'Adcionar'
    preco.innerText = card.querySelector('.corpoCard > .preco > span').innerText
    imgFechar.src += 'Imagem/Icones/close_FILL0_wght400_GRAD0_opsz24.svg'

    return li
}