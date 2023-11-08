import criaListaFavo from "./cardFavo.js"
import { carrinho, cardsAvulsoCart } from "../Carrinho/Carrinho.js"

// Array que guarda os Cards
let arrayCard = []

function favorito(event){
    if(event.currentTarget) event.preventDefault()

    // Adiciona e Verifica se o card está Favoritado
    const listaFavo = document.querySelector('#listaFavo')
    let card = undefined
    if(event.currentTarget){
        card = event.currentTarget.closest('.corpoCard')
        cardsAvulsoFavo(card)
    }else{
        card = event
    }
    
    const cardFavo = criaListaFavo(card)

    if(!arrayCard.includes(card)){
        arrayCard.push(card)
    }

    card.classList.toggle('AdcionadoFavo')
    const verifica = card.classList.contains('AdcionadoFavo')
    if(verifica){
        listaFavo.appendChild(cardFavo)
        if(event.currentTarget){
            event.currentTarget.querySelector('img').src = 'Imagem/Icones/CoracaoCheio.svg'
        }else{
            const iconeCoracao = event.querySelector('.coracaoOriginal')
            iconeCoracao.querySelector('img').src = 'Imagem/Icones/CoracaoCheio.svg'
        }
    }else{
        listaFavo.removeChild(listaFavo.children[arrayCard.indexOf(card)])
        if(event.currentTarget){
            event.currentTarget.querySelector('img').src = 'Imagem/Icones/CoracaoVazio.svg'
        }else{
            const iconeCoracao = event.querySelector('.coracaoOriginal')
            iconeCoracao.querySelector('img').src = 'Imagem/Icones/CoracaoVazio.svg'
        }
        arrayCard = arrayCard.filter(el => el !== card)
    }

    // Verifica se o item está favoritado
    const vazioFavo = document.querySelector('#vazioFavo')
    const cheioFavo = document.querySelector('#cheioFavo')

    if(listaFavo.childElementCount > 0){
        vazioFavo.style.display = 'none'
        cheioFavo.style.display = 'flex'
    }else{
        vazioFavo.style.display = 'flex'
        cheioFavo.style.display = 'none'
    }

   // Testes
    verificaItemCart()

    // Chama a função que adciona o produto da aba favo para aba cart
    const buttonAdc = document.querySelectorAll('.adiciona')
    buttonAdc.forEach((el)=>{
        el.addEventListener('click', deFavoParaCart)
        el.addEventListener('touchend', deFavoParaCart) 
    })
    

    // Chama a função que remove os itens na aba favoritos
    const iconFechar = document.querySelectorAll('.iconFecharFavo')
    iconFechar.forEach((el)=>{
        el.addEventListener('click', removeItemFavo)
        el.addEventListener('touchend', removeItemFavo)
    })
}  

export function verificaItemCart(){

    // Verifica se o item ja está no cart
    const listaCart = document.querySelector('#listaCart')
    
    const iconCartAdd = 'Imagem/Icones/add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'
    const iconCartRemove = 'Imagem/Icones/remove_shopping_cart-white.svg'

    const containerCardFavo = [...document.querySelectorAll('.containerCardFavo')]
    const containerCardCart = [...document.querySelectorAll('.containerCardCarrinho')]

    if(!listaCart.childElementCount > 0){
        containerCardFavo.forEach(el => {
            //Limpando os Botões
            el.querySelector('.adiciona').innerHTML = ''

            // Recriando os elementos
            const span = document.createElement('span')
            const img = document.createElement('img')
            el.querySelector('.adiciona').appendChild(span)
            span.appendChild(img)

            img.src = iconCartAdd
            el.querySelector('.adiciona').innerHTML += 'Adicionar'
        })
    }else if(listaCart.childElementCount > 0 && listaFavo.childElementCount > 0){
        const nomeCart = containerCardCart.map(el => el.querySelector('.textCart').innerHTML)
        const nomeFavo = containerCardFavo.map(el => el.querySelector('.textFavo').innerHTML)
    
        // Me da os nomes dos cards que estão na aba cart e favorito
        const stringsIguais = []
        for (let i = 0; i < nomeFavo.length; i++) {
            for (let j = 0; j < nomeCart.length; j++) {
                if (nomeFavo[i] === nomeCart[j]) {
                    stringsIguais.push(nomeFavo[i])
                    break
                }
            }
        }
      
        // Verifica se os cards então adcionado no carrinho ou não
        for(let i = 0; i < containerCardFavo.length; i++){
            for(let j = 0; j < stringsIguais.length; j++){
                if(containerCardFavo[i].querySelector('.textFavo').innerHTML === stringsIguais[j]){
                    // Limpando os Botões
                    containerCardFavo[i].querySelector('.adiciona').innerHTML = ''

                    // Recriando os elementos
                    const span = document.createElement('span')
                    const img = document.createElement('img')
                    containerCardFavo[i].querySelector('.adiciona').appendChild(span)
                    span.appendChild(img)

                    img.src = iconCartRemove
                    containerCardFavo[i].querySelector('.adiciona').innerHTML += 'Remover'
                    break;
                }else{
                    // Limpando os Botões
                    containerCardFavo[i].querySelector('.adiciona').innerHTML = ''

                    // Recriando os elementos
                    const span = document.createElement('span')
                    const img = document.createElement('img')
                    containerCardFavo[i].querySelector('.adiciona').appendChild(span)
                    span.appendChild(img)

                    img.src = iconCartAdd
                    containerCardFavo[i].querySelector('.adiciona').innerHTML += 'Adicionar'
                }
            }
        }
    }
}

function deFavoParaCart(event){
    event.preventDefault()

    const iconCartAdd = 'Imagem/Icones/add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'
    event.currentTarget.classList.toggle('addRemove')
    if(event.currentTarget.classList.contains('addRemove')){
         // Limpando os Botões
         event.currentTarget.innerHTML = ''

         // Recriando os elementos
         const span = document.createElement('span')
         const img = document.createElement('img')
         event.currentTarget.appendChild(span)
         span.appendChild(img)

         img.src = iconCartAdd
         event.currentTarget.innerHTML += 'Adicionar'
    }

    const cardsProdutos = arrayCard.filter(el => el.classList.contains('AdcionadoFavo'))
    
    // tive que buscar os mesmo elementos para saber onde foi o click
    const cardFavo = event.currentTarget.closest('.containerCardFavo')
    const indiceFavo = [...listaFavo.children].findIndex(el => el === cardFavo)

    const cardProduto = cardsProdutos[indiceFavo]

    cardsAvulsoCart(cardProduto)
    carrinho(cardProduto)
}


function removeItemFavo(event){
    event.preventDefault()

    const listaFavo = document.querySelector('#listaFavo')
    const cardFavo = event.currentTarget.closest('.containerCardFavo')

    //Remove item do array
    const indiceLista = [...listaFavo.children].indexOf(cardFavo)
    arrayCard[indiceLista].querySelector('.screen > div > .iconCoracao > img').src = 'Imagem/Icones/CoracaoVazio.svg'
    arrayCard[indiceLista].classList.remove('AdcionadoFavo')
    arrayCard = arrayCard.filter((el, i) => i !== indiceLista)

    // Substituindo icone de Coração da aba Destaque
    const arrayDestaques = [...document.querySelectorAll('.cardDestaque')]
    const nomeCardCart = cardFavo.querySelector('.textFavo').innerHTML

    for(let i = 0; i < arrayDestaques.length; i++){
        const nomeDestaque = arrayDestaques[i].querySelector('.tituloCard').innerHTML
        const iconeDestaque = arrayDestaques[i].querySelector('.coraDestaque')
        
        if(nomeDestaque === nomeCardCart){
            iconeDestaque.classList.remove('trocaIconFavo')
            iconeDestaque.querySelector('img').src = 'Imagem/Icones/CoracaoVazio.svg'
            break;
        }
    }

    //remove item da aba favorito
    listaFavo.removeChild(cardFavo)
    
    // Verifica se o item está favoritado
    if(listaFavo.childElementCount > 0){
        vazioFavo.style.display = 'none'
        cheioFavo.style.display = 'flex'
    }else{
        vazioFavo.style.display = 'flex'
        cheioFavo.style.display = 'none'
    }
}

function cardsAvulsoFavo(event){
    let nomeCard = undefined
    let iconFavo = undefined
    let arrayCards = []

    if(event.currentTarget){
        event.preventDefault()
        const cardDestaque = event.currentTarget.closest('.cardDestaque')
        nomeCard = cardDestaque.querySelector('.tituloCard').innerHTML
        iconFavo = event.currentTarget
        arrayCards = [...document.querySelectorAll('.cardEstoque')]
    }else{
        nomeCard = event.querySelector('.tituloCardEstoque').innerHTML 
        arrayCards = [...document.querySelectorAll('.cardDestaque')]
    }

    const iconRemove = 'Imagem/Icones/CoracaoVazio.svg'
    const iconAdd = 'Imagem/Icones/CoracaoCheio.svg'

    for(let i = 0; i < arrayCards.length; i++){
        const nomeArrayCards = arrayCards[i].querySelector('.tituloCard').innerHTML
        if(nomeArrayCards === nomeCard){
            if(event.currentTarget) favorito(arrayCards[i])
            if(!event.currentTarget) iconFavo = arrayCards[i].querySelector('.coraDestaque')

            iconFavo.classList.toggle('trocaIconFavo')
            if(iconFavo.classList.contains('trocaIconFavo')){
                iconFavo.querySelector('img').src = iconAdd
            }else{
                iconFavo.querySelector('img').src = iconRemove
            }
            break;
        } 
    }
}

export default function iniciaFavorito(){
    const iconCoracao = document.querySelectorAll('.coracaoOriginal')
    iconCoracao.forEach((el)=>{
        el.addEventListener('click', favorito)
        el.addEventListener('touchend', favorito)
    })

    const favoAvulso = document.querySelectorAll('.coraDestaque')
    favoAvulso.forEach((el)=>{
        el.addEventListener('click', cardsAvulsoFavo)
        el.addEventListener('touchend', cardsAvulsoFavo)
    })
}