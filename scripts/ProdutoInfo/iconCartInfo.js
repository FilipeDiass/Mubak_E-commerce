import carrinhoInfo from "../CarrinhoInfo/carrinhoInfo.js"
import RemoveCartCarrinho from "../CarrinhoInfo/RemoveCartCarrinho.js"

function iconCartInfo(event){
    event.preventDefault()
    
    const cartAdd = '../Imagem/Icones/add_shopping_cart.svg'
    const cartRemove = '../Imagem/Icones/remove_shopping_cart.svg'
    
    event.currentTarget.classList.toggle('clicou')
    const verifica = event.currentTarget.classList.contains('clicou')

    const cartImg = event.currentTarget.querySelector('img')
    verifica? cartImg.src = cartRemove : cartImg.src = cartAdd 

    // descobre o nome
    const verifica2 = event.currentTarget.classList.contains('cart')
    let nomeProduto = undefined
    if(verifica2){
        nomeProduto = document.querySelector('.InfoTitulo').innerHTML

        const outroProduto = document.querySelectorAll('.tituloCard')
        outroProduto.forEach(nome=>{
            if(nome.innerHTML === nomeProduto){
                const iconeCarrinho = nome.closest('.cardDestaque').querySelector('.cartDestaque')
                iconeCarrinho.classList.toggle('clicou')
                iconeCarrinho.querySelector('img').src = cartImg.src
            }
        })
    }else{
        const cardProduto = event.currentTarget.closest('.cardDestaque')
        nomeProduto = cardProduto.querySelector('.tituloCard').innerHTML

        const outroProduto = document.querySelector('.InfoTitulo').innerHTML
        if(outroProduto === nomeProduto){
            const iconeCarrinho = document.querySelector('.cartPrincipal')
            iconeCarrinho.classList.toggle('clicou')
            iconeCarrinho.querySelector('img').src = cartImg.src
            const iconeCarrinho2 = document.querySelector('.cartPrincipal2')
            iconeCarrinho2.classList.toggle('clicou')
            iconeCarrinho2.querySelector('img').src = cartImg.src
        }
    }

    //Cart Duplo
    const cartDuplo = document.querySelectorAll('.cartDuplo')
    if(cartDuplo[0] === event.currentTarget){
        cartDuplo[1].classList.toggle('clicou')
        const verificaClass = cartDuplo[1].classList.contains('clicou')
        cartDuplo[1].querySelector('img').src = verificaClass? cartRemove : cartAdd
    }else if(cartDuplo[1] === event.currentTarget){
        cartDuplo[0].classList.toggle('clicou')
        const verificaClass = cartDuplo[1].classList.contains('clicou')
        cartDuplo[0].querySelector('img').src = verificaClass? cartRemove : cartAdd
    }

    // pega o objeto
    const produtoObjeto = objetoProduto(nomeProduto)
    carrinhoInfo(produtoObjeto)

    // Remove cartCarrinho
    RemoveCartCarrinho(produtoObjeto)
}

export default function iniciaCartInfo(){
    const iconCart = document.querySelectorAll('.iconCart')
    iconCart.forEach(el=>{
        el.addEventListener('click', iconCartInfo)
        el.addEventListener('touchend', iconCartInfo)
    })
}

export function objetoProduto(nomeProduto){
    const produtoString = localStorage.getItem('dados')
    const produto = JSON.parse(produtoString)

    const objetoProduto = produto.find(el => el.nome === nomeProduto)
    return objetoProduto
}

