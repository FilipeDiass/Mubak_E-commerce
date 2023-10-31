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
    
    // Adciona a quantidade do produto
    const preco = cardCart.querySelector('.card > p')
    const spanNumber = document.querySelectorAll('.spanNumber')
    const maisMenos = event.currentTarget.classList.contains('buttonMenos')
    if(maisMenos){
        if(spanNumber[indiceCart].innerHTML > 1){
            spanNumber[indiceCart].innerHTML -- 
            preco.innerText = adcionaPreco(produto, indiceProduto, maisMenos, spanNumber, indiceCart)
        }
    }else{
        if(spanNumber[indiceCart].innerHTML < 10){
            spanNumber[indiceCart].innerHTML ++  
            preco.innerText = adcionaPreco(produto, indiceProduto, maisMenos, spanNumber, indiceCart)
        }else{
            alert('Vocé atingiu o máximo de produtos')
        }  
    }

    // Valor total dos produtos
    totalProdutos()
}

function adcionaPreco(produto, indiceProduto, maisMenos, spanNumber, indiceCart){
    let precoProduto = undefined
    if(!maisMenos){
        precoProduto = produto[indiceProduto].preco * spanNumber[indiceCart].innerHTML
    }else{
        precoProduto = produto[indiceProduto].preco * (spanNumber[indiceCart].innerHTML === 0? -1 : spanNumber[indiceCart].innerHTML)
    }
    
    // Convete o numero para a moeda Brasileira
    const precoNovo = precoProduto.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return precoNovo
}

export function totalProdutos(){
    // Dados dos cards(json)
    const produtoCard = Produtos()
    const produto = produtoCard.itensDestaque

    // Valor total dos produtos
    const listaCart = document.querySelector('#listaCart')

    if(listaCart.childElementCount > 0){
        const arrayNomes = [...document.querySelectorAll('.tituloQuantidade > p')] 
        const valorTotal = document.querySelector('#totalProduto')
        
        const indice = arrayNomes.map(prod => {
            return produto.findIndex(el => el.nome === prod.innerHTML)
        })
        
        let spanNumber = [...document.querySelectorAll('.spanNumber')]
        const total = indice.reduce((acumulador, el, i)=>{
            return acumulador + produto[el].preco * spanNumber[i].innerHTML
        },0)

        valorTotal.innerHTML = total
    }
}

export default function iniciaItemQuantidade(){
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