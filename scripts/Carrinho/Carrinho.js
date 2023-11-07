import criaListaCart from "./cardCarrinho.js"
import iniciaItemQuantidade from "./ItemQuantidade.js"
import { totalProdutos } from "./ItemQuantidade.js"
import { Produtos } from "../Cards/insereCards.js"
import { verificaItemCart } from "../Favorito/favorito.js"

// Array que guarda os Cards
let arrayCard = []

export function carrinho(event){
    if(event.currentTarget) event.preventDefault()

    // Dados dos cards(json)
    const produto = Produtos()
    
    const listaCart = document.querySelector('#listaCart')
    let card = undefined
    if(event.currentTarget){
        card = event.currentTarget.closest('.corpoCard')
        cardsAvulso(card)
    }else{
        card = event
    }

    const cardCart = criaListaCart(card)
    
    if(!arrayCard.includes(card)){
        arrayCard.push(card)
    }
    
    // //Cria um array com os icones e descobre o indice deles
    // const iconCart = [...document.querySelectorAll('.original')]
    // const indiceProduto = produto.findIndex(el => el.nome === card.querySelector('.tituloCardEstoque').innerHTML)

    // console.log([...document.querySelectorAll('.original')])

    card.classList.toggle('AdcionadoCart')
    const verifica = card.classList.contains('AdcionadoCart')
    if(verifica){
        listaCart.appendChild(cardCart)
        card.querySelector('.cartOriginal').querySelector('img').src = 'Imagem/Icones/remove_shopping_cart.svg'
    }else{
        card.querySelector('.cartOriginal').querySelector('img').src = 'Imagem/Icones/add_shopping_cart.svg'
        listaCart.removeChild(listaCart.children[arrayCard.indexOf(card)])
        arrayCard = arrayCard.filter(el => el !== card)
    }

    // Verifica se o item está no carrinho
    const carrinhoVazio = document.querySelector('.carrinhoVazio')
    const carrinhoCheio = document.querySelector('.carrinhoCheio')

    if(listaCart.childElementCount > 0){
        carrinhoVazio.style.display = 'none'
        carrinhoCheio.style.display = 'block'
    }else{
        carrinhoVazio.style.display = 'flex'
        carrinhoCheio.style.display = 'none'
    }

    //Chama a função que remove os itens na aba favoritos
    const iconFechar = document.querySelectorAll('.iconFecharCart')
    iconFechar.forEach((el)=>{
        el.addEventListener('click', removeItemCart)
        el.addEventListener('touchend', removeItemCart)
    })

    // Valor total dos produtos
    totalProdutos()

    //chama a função iniciaItemQuantidade
    iniciaItemQuantidade()

    
    verificaItemCart()
}

function removeItemCart(event){
    const listaCart = document.querySelector('#listaCart')
    const cardCart = event.currentTarget.closest('.containerCardCarrinho')

    // Remove item do array
    const indiceLista = [...listaCart.children].indexOf(cardCart)
    arrayCard[indiceLista].querySelector('.screen > div > .iconCart > img').src = 'Imagem/Icones/add_shopping_cart.svg'
    arrayCard[indiceLista].classList.remove('AdcionadoCart')
    arrayCard = arrayCard.filter((el, i) => i !== indiceLista)

    // Substituindo icone de Cart da aba Destaque
    const arrayDestaques = [...document.querySelectorAll('.cardDestaque')]
    const nomeCardCart = cardCart.querySelector('.textCart').innerHTML

    for(let i = 0; i < arrayDestaques.length; i++){
        const nomeDestaque = arrayDestaques[i].querySelector('.tituloCard').innerHTML
        const iconeDestaque = arrayDestaques[i].querySelector('.cartDestaque')
        
        if(nomeDestaque === nomeCardCart){
            iconeDestaque.classList.remove('trocaIcon')
            iconeDestaque.querySelector('img').src = 'Imagem/Icones/add_shopping_cart.svg'
            break;
        }
    }

    //remove item da aba favorito
    listaCart.removeChild(cardCart)
    
    // Verifica se o item está favoritado
    const carrinhoVazio = document.querySelector('.carrinhoVazio')
    const carrinhoCheio = document.querySelector('.carrinhoCheio')

    if(listaCart.childElementCount > 0){
        carrinhoVazio.style.display = 'none'
        carrinhoCheio.style.display = 'block'
    }else{
        carrinhoVazio.style.display = 'flex'
        carrinhoCheio.style.display = 'none'
    }
    
    // Valor total dos produtos
    totalProdutos()
    
    //Teste
    verificaItemCart()
}


export function cardsAvulso(event){

    let nomeCard = undefined
    let iconCart = undefined
    let arrayCards = []

    if(event.currentTarget){
        event.preventDefault()
        const cardDestaque = event.currentTarget.closest('.cardDestaque')
        nomeCard = cardDestaque.querySelector('.tituloCard').innerHTML
        iconCart = event.currentTarget
        arrayCards = [...document.querySelectorAll('.cardEstoque')]
    }else{
        nomeCard = event.querySelector('.tituloCardEstoque').innerHTML
        iconCart = event.querySelector('.cartOriginal')
        arrayCards = [...document.querySelectorAll('.cardDestaque')]
    } 

    const iconRemove = 'Imagem/Icones/remove_shopping_cart.svg'
    const iconAdd = 'Imagem/Icones/add_shopping_cart.svg'
    
    for(let i = 0; i < arrayCards.length; i++){
        const nomeArrayCards = arrayCards[i].querySelector('.tituloCard').innerHTML
        if(nomeCard === nomeArrayCards){
            if(event.currentTarget) carrinho(arrayCards[i])
            
            if(!event.currentTarget){
            iconCart = arrayCards[i].querySelector('.cartDestaque')
            } 

            iconCart.classList.toggle('trocaIcon')
            if(iconCart.classList.contains('trocaIcon')){
                iconCart.querySelector('img').src = iconRemove
            }else{
                iconCart.querySelector('img').src = iconAdd
            }
            break;
        }
    }
} 


export default function iniciaCarrinho(){
    const iconCart = document.querySelectorAll('.cartOriginal')
    iconCart.forEach(el=>{
        el.addEventListener('click', carrinho)
        el.addEventListener('touchend', carrinho)
    })

    const cartAvulso = document.querySelectorAll('.cartDestaque')
    cartAvulso.forEach(el=>{
        el.addEventListener('click', cardsAvulso)
        el.addEventListener('touchend', cardsAvulso)
    })
}