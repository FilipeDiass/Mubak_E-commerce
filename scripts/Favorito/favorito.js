import criaListaFavo from "./cardFavo.js"

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

    const listaFavo = document.querySelector('.listaFavo')
    const card = event.currentTarget.parentNode.parentNode.parentNode
    const cardFavo = criaListaFavo(card)
    listaFavo.appendChild(cardFavo)

    console.log(card.querySelector('.screen > img').src)

    
    // const cards = [...document.querySelectorAll('.corpoCard')]
}




export default async function iniciaFavorito(){
    const iconCoracao = document.querySelectorAll('.iconCoracao')
    iconCoracao.forEach((el)=>{
        el.addEventListener('click', favorito)
        el.addEventListener('touchend', favorito)
    })
}