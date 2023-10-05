// Abrir/Fechar Menu Burguer
const menuBurgue = document.querySelector('#menuBurgue')
function Menu(event){
    event.preventDefault()
    const campMobile = document.querySelector('#menuMobile')
    const campIcones = document.querySelector('#campIcones')
    campMobile.classList.toggle('ativo')
    campIcones.classList.toggle('anima')

    const chaveMenu = campMobile.classList.contains('ativo')
    if(chaveMenu === true){
        campMobile.style.visibility = 'visible'
        menuBurgue.style.zIndex = '10'
    }else{
        campMobile.style.visibility = 'hidden'
        menuBurgue.style.zIndex = '0'
    }
}
menuBurgue.addEventListener('click', Menu)
menuBurgue.addEventListener('touchstart', Menu)

// Fechar/Abrir Menu Carrinho
const fecharCart = document.querySelector('#fecharCart')
const abrirCart = document.querySelector('#abrirCart')
function menuCarrinho(event){
    event.preventDefault()

    const containerCart = document.querySelector('#containerCart')
    containerCart.classList.toggle('active')

    const chaveMenu = containerCart.classList.contains('active')
    if(chaveMenu === true){
        containerCart.style.visibility = 'visible'
    }else{
        containerCart.style.visibility = 'hidden'
    }
}
fecharCart.addEventListener('click', menuCarrinho)
fecharCart.addEventListener('touchstart', menuCarrinho)
abrirCart.addEventListener('click', menuCarrinho)
abrirCart.addEventListener('touchstart', menuCarrinho)