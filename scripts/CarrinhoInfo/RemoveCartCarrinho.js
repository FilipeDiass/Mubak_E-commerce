import { verificaAdc } from "../FavoritoInfo/favoritoInfo.js"
import { precoTotal } from "./IniciaPrecoQuant.js"

export default function RemoveCartCarrinho(produto){
    const iconRemoveCart = document.querySelectorAll('.iconFecharCart')
    iconRemoveCart.forEach(el=>{
        el.addEventListener('click', removeCart)
        el.addEventListener('touchend', removeCart)
    })
}

function removeCart(event){
    event.preventDefault()
    
    // Referente a lista de cards e os cards
    const listaCart = document.querySelector('#listaCart') 
    const cardCart = event.currentTarget.closest('.containerCardCarrinho') 

    // Referente aos icones(iconCart) dos cards que estão na lista
    const iconCards = [...document.querySelectorAll('.clicou')]
    const iconPrincipal = iconCards.find(el => el.classList.contains('cartPrincipal'))
    const iconPrincipal2 = iconCards.find(el => el.classList.contains('cartPrincipal2'))
    // Tirando as classes e mudando o icone
    const cartAdd = '../Imagem/Icones/add_shopping_cart.svg'
    const cartRemove = '../Imagem/Icones/remove_shopping_cart.svg'

    // Pegando nome do produto para saber qual elemento tirar as propiedades(Icone e Class)
    const nomeCart = cardCart.querySelector('.textCart').innerHTML

    let arrayCart = []
    iconCards.forEach(el=>{
        if(el === iconPrincipal){
            const nome = document.querySelector('.InfoTitulo').innerHTML
            if(nome === nomeCart) arrayCart.push(el)
        }else if(el === iconPrincipal2){
            const nome = document.querySelector('.InfoTitulo').innerHTML
            if(nome === nomeCart) arrayCart.push(el)
        }else{
            const nome = el.closest('.cardDestaque').querySelector('.tituloCard').innerHTML
            if(nome === nomeCart) arrayCart.push(el)
        }
    })

    // Retirando as propiedades(Icone e Class)
    arrayCart.forEach(el=>{
        el.classList.remove('clicou')
        el.querySelector('img').src = cartAdd
    })

    listaCart.removeChild(cardCart)

    // Verifica se tem item no carrinho
    const carrinhoVazio = document.querySelector('.carrinhoVazio')
    const carrinhoCheio = document.querySelector('.carrinhoCheio')

    if(listaCart.childElementCount > 0){
        carrinhoVazio.style.display = 'none'
        carrinhoCheio.style.display = 'block'
    }else{
        carrinhoVazio.style.display = 'flex'
        carrinhoCheio.style.display = 'none'
    }

    verificaAdc()
    precoTotal()
}