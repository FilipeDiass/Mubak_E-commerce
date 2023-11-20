export default function criaCardFavoInfo(Produto){
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
    const txtAdc = document.createElement('p')
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
    buttonAdc.appendChild(txtAdc)
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
    titulo.classList.add('textFavo')
    imgCart.classList.add('imgCart')

    const converteTotal = Produto.preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    // Adicionando Conteúdo aos elementos
    imgProduto.src = '../' + Produto.imagem
    titulo.innerText = Produto.nome
    imgCart.src = '../Imagem/Icones/add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'
    txtAdc.innerHTML = 'Adcionar'
    preco.innerText = converteTotal
    imgFechar.src += '../Imagem/Icones/close_FILL0_wght400_GRAD0_opsz24.svg'

    return li
}