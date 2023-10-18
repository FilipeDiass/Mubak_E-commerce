import pegaDados from "./produto.js";

export async function criaCardsDestaque() { 
    const data = await pegaDados();
    const produto = data.itensDestaque
    
    console.log(produto[0].categoria)
    //Adiciona Cards na aba Destaques
    const containerCard = document.querySelector('.cardDestaque')
    console.log(containerCard)
}

export async function criaCardsEstoque(){
    const data = await pegaDados();
    const produto = data.itensEstoque
    // console.log(produto)
}

