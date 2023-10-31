import criaListaCart from "./cardCarrinho.js"
import iniciaItemQuantidade from "./ItemQuantidade.js"
import { Produtos } from "../Cards/insereCards.js"
import { totalProdutos } from "./ItemQuantidade.js"

// Array que guarda os Cards
let arrayCard = []

function carrinho(event){
    event.preventDefault()

    // Dados dos cards(json)
    const produtoCard = Produtos()
    const produto = produtoCard.itensDestaque

    const listaCart = document.querySelector('#listaCart')
    const card = event.currentTarget.closest('.corpoCard')
    const cardCart = criaListaCart(card)
    
    if(!arrayCard.includes(card)){
        arrayCard.push(card)
    }

    card.classList.toggle('AdcionadoCart')
    const verifica = card.classList.contains('AdcionadoCart')
    if(verifica){
        listaCart.appendChild(cardCart)
        event.currentTarget.querySelector('img').src = 'Imagem/Icones/remove_shopping_cart.svg'
    }else{
        event.currentTarget.querySelector('img').src = 'Imagem/Icones/add_shopping_cart.svg'
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
}

function removeItemCart(event){
    const listaCart = document.querySelector('#listaCart')
    const cardCart = event.currentTarget.closest('.containerCardCarrinho')

    //Remove item do array
    const indiceLista = [...listaCart.children].indexOf(cardCart)
    arrayCard[indiceLista].querySelector('.screen > div > .iconCart > img').src = 'Imagem/Icones/add_shopping_cart.svg'
    arrayCard[indiceLista].classList.remove('AdcionadoCart')
    arrayCard = arrayCard.filter((el, i) => i !== indiceLista)

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
}

export default function iniciaCarrinho(){
    const iconCart = document.querySelectorAll('.iconCart')
    iconCart.forEach(el=>{
        el.addEventListener('click', carrinho)
        el.addEventListener('touchend', carrinho)
    })
}