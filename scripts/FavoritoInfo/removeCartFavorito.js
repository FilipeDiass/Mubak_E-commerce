export default function removeCartFavorito(produto){
    const iconFecharFavo = document.querySelectorAll('.iconFecharFavo')
    iconFecharFavo.forEach(el=>{
        el.addEventListener('click', removeFavo)
        el.addEventListener('touchend', removeFavo)
    })
}

function removeFavo(event){
    event.preventDefault()

    // Referente a lista de cards e os cards
    const listaFavo = document.querySelector('#listaFavo') 
    const cardFavo = event.currentTarget.closest('.containerCardFavo')

    // Referente aos icones(iconCart) dos cards que estão na lista
    const iconCards = [...document.querySelectorAll('.Favoritou')]
    const favoPrinicipal = iconCards.find(el => el.classList.contains('favoPrinicipal'))
    const favoPrinicipal2 = iconCards.find(el => el.classList.contains('favoPrinicipal2'))

    const favoAdd = '../Imagem/Icones/CoracaoCheio.svg'
    const favoRemove = '../Imagem/Icones/CoracaoVazio.svg'

    // Pegando nome do produto para saber qual elemento tirar as propiedades(Icone e Class)
    const nomeFavo = cardFavo.querySelector('.textFavo').innerHTML

    let arrayFavo = []
    iconCards.forEach(el=>{
        if(el === favoPrinicipal){
            const nome = document.querySelector('.InfoTitulo').innerHTML
            if(nome === nomeFavo) arrayFavo.push(el)
        }else if(el === favoPrinicipal2){
            const nome = document.querySelector('.InfoTitulo').innerHTML
            if(nome === nomeFavo) arrayFavo.push(el)
        }else{
            const nome = el.closest('.cardDestaque').querySelector('.tituloCard').innerHTML
            if(nome === nomeFavo) arrayFavo.push(el)
        }
    })

    // Retirando as propiedades(Icone e Class)
    arrayFavo.forEach(el=>{
        el.classList.remove('Favoritou')
        el.querySelector('img').src = favoRemove
    })

    listaFavo.removeChild(cardFavo)

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

