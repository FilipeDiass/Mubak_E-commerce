import pegaDados from "./pegaDados.js";
import criaCorpoCard from "./card.js";
import scrollCard from "./scroolCard.js";

let dados = undefined
export async function criaCardsDestaque() { 
    return new Promise(async(resolve)=>{
        dados = await pegaDados();
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
    return new Promise(async(resolve)=>{
        const temporario = await pegaDados();
        const produto = temporario.itensEstoque
        embaralhaArray(produto)
        //Adiciona Cards na aba Destaques
        const containerCard = document.querySelectorAll('.cardEstoque')
        produto.forEach((prod, i)=>{
            const cards = criaCorpoCard(prod)
            const indice = i % 2 === 0? 0 : 1
            containerCard[indice].appendChild(cards)  
        })
        scrollCard()
        resolve()
    })    
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

// Função para exporta os dados já embaralhados
export function Produtos() {
    return dados
}