import pegaDados from "./produto.js";
import criaCorpoCard from "./card.js";

export async function criaCardsDestaque() { 
    const data = await pegaDados();
    const produto = data.itensDestaque
    
    //Adiciona Cards na aba Destaques
    const containerCard = document.querySelector('.cardDestaque')
    produto.forEach((prod)=>{
        const cards = criaCorpoCard(prod)
        containerCard.appendChild(cards)  
    })
}

export async function criaCardsEstoque(){
    // const data = await pegaDados();
    // const produto = data.itensEstoque
    // console.log(produto)
}
