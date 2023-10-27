import { Produtos } from "../Cards/insereCards.js"

let numero = 1
function ItemQuantidade(event){
    const produtoCard = Produtos()
    const preco = produtoCard.itensDestaque

    const spanNumber = document.querySelectorAll('.spanNumber')
    const maisMenos = event.currentTarget.classList.contains('buttonMenos')
    if(maisMenos){
        if(numero > 1){
            numero -= 1
            spanNumber[0].innerHTML = numero
        }
    }else{
        if(numero < 10){
            numero += 1
            spanNumber[0].innerHTML = numero
        }
    }

    const nomeProduto = document.querySelector('.tituloQuantidade > p')
    preco.forEach((el, i) => {
        console.log(el.nome)
        if(el.nome === nomeProduto.innerText){
            console.log(el.preco)
        }
    })
    // if(preco.nome)



}



export default function iniciaItemQuantidade(card, cardCart){
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