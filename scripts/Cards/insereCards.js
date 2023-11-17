import pegaDados from "./pegaDados.js";
import criaCorpoCard from "./card.js";
import scrollCard from "./scroolCard.js";

let produto = undefined
export async function criaCards() { 
    return new Promise(async(resolve)=>{
        const dados = await pegaDados();
        produto = dados.produtosDados
        embaralhaArray(produto)

        //Adiciona Cards na aba Destaques
        const containerDestaque = document.querySelector('.campDestaque')
        produto.forEach((prod)=>{
            if(prod.id <= 20){
                const cards = criaCorpoCard(prod)
                cards.classList.add('cardDestaque')
                cards.querySelector('.iconCoracao').classList.add('coraDestaque')
                cards.querySelector('.iconCart').classList.add('cartDestaque')
                containerDestaque.appendChild(cards) 
            }    
        })

        //Adiciona Cards na aba Estoque 
        const containerEstoque = document.querySelectorAll('.campEstoque')
        produto.forEach((prod, i)=>{
            const cards = criaCorpoCard(prod)

            //Dando classes apenas para os produto em estoque
            cards.classList.add('cardEstoque')
            cards.querySelector('.iconCart').classList.add('cartOriginal')
            cards.querySelector('.iconCoracao').classList.add('coracaoOriginal')
            cards.querySelector('.tituloCard').classList.add('tituloCardEstoque')

            const indice = i % 2 === 0? 0 : 1
            containerEstoque[indice].appendChild(cards)
        })
        
        scrollCard()
        resolve()
    })    
}

// Função para embaralhar um array
export function embaralhaArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Número aleatório
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para exporta os dados já embaralhados
export function Produtos() {
    return produto
}