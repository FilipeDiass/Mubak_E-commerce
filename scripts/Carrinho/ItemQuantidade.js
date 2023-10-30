import { Produtos } from "../Cards/insereCards.js"

function ItemQuantidade(event){
    event.preventDefault()
    // Dados dos cards(json)
    const produtoCard = Produtos()
    const produto = produtoCard.itensDestaque

    // Descobre o indice do card na aba carrinho
    const listaCart = document.querySelector('#listaCart')
    const cardCart = event.currentTarget.closest('.containerCardCarrinho')
    const indiceCart = [...listaCart.children].findIndex(el => el === cardCart)

    // Descobre o indice do produto no arquivo json
    const nomeProduto = document.querySelectorAll('.tituloQuantidade > p')
    const indiceProduto = produto.findIndex(el => el.nome === nomeProduto[indiceCart].innerText)
    
    //Adciona a quantidade do produto
    const preco = cardCart.querySelector('.card > p')
    const spanNumber = document.querySelectorAll('.spanNumber')
    const maisMenos = event.currentTarget.classList.contains('buttonMenos')
    if(maisMenos){
        if(spanNumber[indiceCart].innerHTML > 1){
            spanNumber[indiceCart].innerHTML -- 
            adcionaPreco(produto, indiceProduto, maisMenos, preco, spanNumber, indiceCart)
        }
    }else{
        if(spanNumber[indiceCart].innerHTML < 10){
            spanNumber[indiceCart].innerHTML ++  
            console.log(typeof Number(spanNumber[indiceCart].innerHTML))
            adcionaPreco(produto, indiceProduto, maisMenos, preco, spanNumber, indiceCart)
        }else{
            alert('Vocé atingiu o máximo de produtos')
        }
    }
}

let guardaPreco = 0
function adcionaPreco(produto, indiceProduto, maisMenos, preco, spanNumber, indiceCart){
    let precoProduto = produto[indiceProduto].preco * Number(spanNumber[indiceCart].innerHTML)

    const precoNovo = precoProduto.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return preco.innerText = precoNovo
}

export default function iniciaItemQuantidade(cardCart){
    const buttonMenos = document.querySelectorAll('.buttonMenos')
    const buttonMais = document.querySelectorAll('.buttonMais')
    buttonMenos.forEach(el=>{
        el.addEventListener('click', ItemQuantidade)
        el.addEventListener('touchend', ItemQuantidade)
    })
    buttonMais.forEach(el=>{
        el.addEventListener('click', ItemQuantidade)
        el.addEventListener('touchend', ItemQuantidade)
    })    
}