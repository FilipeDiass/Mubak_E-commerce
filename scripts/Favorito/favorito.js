import criaListaFavo from "./cardFavo.js"

// Array que guarda os Cards
let arrayCard = []

function favorito(event){
    event.preventDefault()

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

    //Chama a função que remove os itens na aba favoritos
    const iconFechar = document.querySelectorAll('.iconFechar')
    iconFechar.forEach((el)=>{
        el.addEventListener('click', removeItemFavo)
        el.addEventListener('touchend', removeItemFavo)
    })
}

function removeItemFavo(event){
    const listaFavo = document.querySelector('.listaFavo')
    const cardFavo = event.currentTarget.closest('.containerCardFavo')

    //Remove item do array
    const indiceLista = [...listaFavo.children].indexOf(cardFavo)
    const teste = arrayCard[indiceLista].querySelector('.screen > div > .iconCoracao > img').src = 'Imagem/Icones/CoracaoVazio.svg'
    console.log(teste)
    arrayCard[indiceLista].classList.remove('Adcionado')
    arrayCard = arrayCard.filter((el, i) => i !== indiceLista)

    //remove item da aba favorito
    listaFavo.removeChild(cardFavo)
    
    // Verifica se o item está favoritado
    if(listaFavo.childElementCount > 0){
        vazioFavo.style.display = 'none'
        cheioFavo.style.display = 'flex'
    }else{
        vazioFavo.style.display = 'flex'
        cheioFavo.style.display = 'none'
    }
}

export default function iniciaFavorito(){
    const iconCoracao = document.querySelectorAll('.iconCoracao')
    iconCoracao.forEach((el)=>{
        el.addEventListener('click', favorito)
        el.addEventListener('touchend', favorito)
    })
}