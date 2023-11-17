import cardCarrinhoInfo from "./cardCarrinhoInfo.js";

export default function carrinhoInfo(produto){
    // Adciona produto ao carrinho e verifica se ele está no carrinho
    const listaCart = document.querySelector('#listaCart') 
    let pegaNome = undefined

    if(listaCart.hasChildNodes()){
        const cardsCarrinho = [...listaCart.children]
        cardsCarrinho.forEach(el=>{
            const nomeCardCarrinho = el.querySelector('.textCart').innerHTML
            if(nomeCardCarrinho === produto.nome){
                listaCart.removeChild(el)
                pegaNome = nomeCardCarrinho
            }
        })
    }

    if(pegaNome !== produto.nome){
        const cardCarrinho = cardCarrinhoInfo(produto)
        listaCart.append(cardCarrinho)
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
}