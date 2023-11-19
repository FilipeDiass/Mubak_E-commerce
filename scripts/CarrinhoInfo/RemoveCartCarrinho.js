export default function RemoveCartCarrinho(produto){
    const iconRemoveCart = document.querySelectorAll('.iconFecharCart')
    iconRemoveCart.forEach(el=>{
        el.addEventListener('click', removeCart)
        el.addEventListener('touchend', removeCart)
    })
}

function removeCart(event){
    event.preventDefault()
    // Referente a lista de cards e os cards
    const listaCart = document.querySelector('#listaCart') 
    const cardCart = event.currentTarget.closest('.containerCardCarrinho') 

    // Referente aos icones(iconCart) dos cards que estão na lista
    const iconCards = [...document.querySelectorAll('.clicou')]
    const iconPrincipal = iconCards.find(el => el.classList.contains('cartPrincipal'))

    // Tirando as classes e mudando o icone
    const cartAdd = '../Imagem/Icones/add_shopping_cart.svg'
    const cartRemove = '../Imagem/Icones/remove_shopping_cart.svg'

    // Pegando nome do produto, retirando a classe/icone
    const nomeCart = cardCart.querySelector('.textCart').innerHTML

    let arrayCart = []
    iconCards.forEach(el=>{
        if(el === iconPrincipal){
            const nome = document.querySelector('.InfoTitulo').innerHTML
            arrayCart.push(nome)
        }else{
            const nome = el.closest('.cardDestaque').querySelector('.tituloCard').innerHTML
            arrayCart.push(nome)
        }
    })

    // Filtrando os nomes para saber o card que foi clicado e retirar as propiedades(Icone e Class)
    const nomeProdutos = arrayCart.filter(el=> el === nomeCart)
    console.log(nomeProdutos)

    // listaCart.removeChild(cardCart)
}