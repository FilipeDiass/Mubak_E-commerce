import criaListaFavo from "./cardFavo.js"
import { carrinho } from "../Carrinho/Carrinho.js"

// Array que guarda os Cards
let arrayCard = []

function favorito(event){
    event.preventDefault()

    // Adiciona e Verifica se o card está Favoritado
    const listaFavo = document.querySelector('#listaFavo')
    const card = event.currentTarget.closest('.corpoCard')
    const cardFavo = criaListaFavo(card)

    if(!arrayCard.includes(card)){
        arrayCard.push(card)
    }
    
    card.classList.toggle('AdcionadoFavo')
    const verifica = card.classList.contains('AdcionadoFavo')
    if(verifica){
        listaFavo.appendChild(cardFavo)
        event.currentTarget.querySelector('img').src = 'Imagem/Icones/CoracaoCheio.svg'
    }else{
        event.currentTarget.querySelector('img').src = 'Imagem/Icones/CoracaoVazio.svg'
        listaFavo.removeChild(listaFavo.children[arrayCard.indexOf(card)])
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
    const cardsProdutos = arrayCard.filter(el => el.classList.contains('AdcionadoFavo'))
    
    // tive que buscar os mesmo elementos para saber onde foi o click
    const cardFavo = event.currentTarget.closest('.containerCardFavo')
    const indiceFavo = [...listaFavo.children].findIndex(el => el === cardFavo)

    const cardProduto = cardsProdutos[indiceFavo]

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

export default function iniciaFavorito(){
    const iconCoracao = document.querySelectorAll('.iconCoracao')
    iconCoracao.forEach((el)=>{
        el.addEventListener('click', favorito)
        el.addEventListener('touchend', favorito)
    })
}