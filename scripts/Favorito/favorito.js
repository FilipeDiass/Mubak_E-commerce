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
    
    const containerCardFavo = [...document.querySelectorAll('.containerCardFavo')]
    const containerCardCart = [...document.querySelectorAll('.containerCardCarrinho')]

    const nomeProdutoFavo = [...document.querySelectorAll('.textFavo')]
    const nomeProdutoCart = [...document.querySelectorAll('.textCart')]

    const filtro = nomeProdutoFavo.map((favo)=>{
        return nomeProdutoCart.filter((cart) => cart.innerHTML === favo.innerHTML)
    })

    console.log(filtro)
    // console.log()

    if(listaCart.childElementCount > 0){
         
         
        // console.log(textCart)
        // console.log(textFavo)
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