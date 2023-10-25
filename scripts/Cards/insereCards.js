import pegaDados from "./pegaDados.js";
import criaCorpoCard from "./card.js";
import scrollCard from "./scroolCard.js";

export async function criaCardsDestaque() { 
    return new Promise(async(resolve)=>{
        const dados = await pegaDados();
        const produto = dados.itensDestaque

        embaralhaArray(produto)
        //Adiciona Cards na aba Destaques
        const containerCard = document.querySelector('.cardDestaque')
        produto.forEach((prod)=>{
            const cards = criaCorpoCard(prod)
            containerCard.appendChild(cards)  
        })
        scrollCard()
        resolve()
    })    
}

export async function criaCardsEstoque(){
    // const data = await pegaDados();
    // const produto = data.itensEstoque
    // console.log(produto)
}

// Função para embaralhar um array
function embaralhaArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Número aleatório
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}