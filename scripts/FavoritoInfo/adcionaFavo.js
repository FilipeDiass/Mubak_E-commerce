import criaCardFavoInfo from "./cardFavoritoInfo.js";

export default function adcionaFavo(produto){
    const listaFavo = document.querySelector('#listaFavo')
    let pegaNome = undefined

    if(listaCart.hasChildNodes()){
        const cardsFavorito = [...listaFavo.children]
        cardsFavorito.forEach(el=>{
            const nomeCardFavorito = el.querySelector('.textFavo').innerHTML
            if(nomeCardFavorito === produto.nome){
                listaFavo.removeChild(el)
                pegaNome = nomeCardFavorito
            }
        })
    }

    if(pegaNome !== produto.nome){
        const cardFavorito = criaCardFavoInfo(produto)
        listaFavo.append(cardFavorito)
    }

    // Verifica se o item está favoritado
    const vazioFavo = document.querySelector('#vazioFavo')
    const cheioFavo = document.querySelector('#cheioFavo')

    if(listaFavo.childElementCount > 0){
        vazioFavo.style.display = 'none'
        cheioFavo.style.display = 'flex'
    }else{
        vazioFavo.style.display = 'flex'
        cheioFavo.style.display = 'none'
    }
}