import criaListaFavo from "./cardFavo.js"

// Array que guarda os Cards
let arrayCard = []

function favorito(event){
    event.preventDefault()
    const vazioFavo = document.querySelector('#vazioFavo')
    const cheioFavo = document.querySelector('#cheioFavo')
    
    if(cheioFavo.childElementCount > 0){
        vazioFavo.style.display = 'none'
        cheioFavo.style.display = 'flex'
    }else{
        cheioFavo.style.display = 'none'
        vazioFavo.style.display = 'block'
    }

    // Adiciona e Verifica se o card está Favoritado
    const listaFavo = document.querySelector('.listaFavo')
    const card = event.currentTarget.closest('.corpoCard')
    const cardFavo = criaListaFavo(card)

    if(!arrayCard.includes(card)){
        arrayCard.push(card)
    }
    
    card.classList.toggle('Adcionado')
    const verifica = card.classList.contains('Adcionado')
    if(verifica){
        listaFavo.appendChild(cardFavo)
        event.currentTarget.querySelector('img').src = 'Imagem/Icones/CoracaoCheio.svg'
    }else{
        event.currentTarget.querySelector('img').src = 'Imagem/Icones/CoracaoVazio.svg'
        listaFavo.removeChild(listaFavo.children[arrayCard.indexOf(card)])
        arrayCard = arrayCard.filter(el => el !== card)
    }
}

export default async function iniciaFavorito(){
    const iconCoracao = document.querySelectorAll('.iconCoracao')
    iconCoracao.forEach((el)=>{
        el.addEventListener('click', favorito)
        el.addEventListener('touchend', favorito)
    })
}