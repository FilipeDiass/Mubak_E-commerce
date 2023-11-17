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

    // listaCart.removeChild(cardCart)
}