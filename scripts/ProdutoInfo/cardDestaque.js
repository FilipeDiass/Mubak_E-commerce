import { embaralhaArray } from "../Cards/insereCards.js";
import criaCardDestaque from "./criaCardDestaque.js";
import scrollCard from "../Cards/scroolCard.js";

export default function cardDestaque(){
    const produtoString = localStorage.getItem('dados')
    const produto = JSON.parse(produtoString)

    embaralhaArray(produto)

    //Adiciona Cards na aba Destaques
    const containerDestaque = document.querySelector('.campDestaque')
    produto.forEach((prod)=>{
        if(prod.id <= 20){
            const cards = criaCardDestaque(prod)
            cards.classList.add('cardDestaque')
            cards.querySelector('.iconCoracao').classList.add('coraDestaque')
            cards.querySelector('.iconCart').classList.add('cartDestaque')
            containerDestaque.appendChild(cards) 
        }    

        scrollCard()
    })

}