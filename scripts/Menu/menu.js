// Abrir/Fechar Menu Burguer
function Menu(event){
    event.preventDefault()
    const body = document.querySelector('body')
    const campMobile = document.querySelector('#menuMobile')
    const campIcones = document.querySelector('#campIcones')
    campMobile.classList.toggle('ativo')
    campIcones.classList.toggle('anima')

    const chaveMenu = campMobile.classList.contains('ativo')
    if(chaveMenu === true){
        campMobile.style.visibility = 'visible'
        menuBurgue.style.zIndex = '10'
        body.style.overflow = 'hidden'
    }else{
        campMobile.style.visibility = 'hidden'
        menuBurgue.style.zIndex = '0'
        body.style.overflow = 'auto'
    }
}

function menuOption(event){
    event.preventDefault()
    const body = document.querySelector('body')
    const containerCart = document.querySelector('#containerCart')
    const containerFavo = document.querySelector('#containerFavo')

    if(event.currentTarget.classList.contains('cart')){
        containerCart.classList.toggle('active')
        const chaveMenu = containerCart.classList.contains('active')
        if(chaveMenu === true){
            containerCart.style.visibility = 'visible'
            body.style.overflow = 'hidden'
        }else{
            containerCart.style.visibility = 'hidden'
            body.style.overflow = 'auto'
        }
    }else{
        containerFavo.classList.toggle('active')
        const chaveMenu = containerFavo.classList.contains('active')
        if(chaveMenu === true){
            containerFavo.style.visibility = 'visible'
            body.style.overflow = 'hidden'
        }else{
            containerFavo.style.visibility = 'hidden'
            body.style.overflow = 'auto'
        }
    }
}

export function iniciarMenu(){
    // Inicializar Abrir/Fechar Menu Burguer
    const menuBurgue = document.querySelector('#menuBurgue')
    menuBurgue.addEventListener('click', Menu)
    menuBurgue.addEventListener('touchstart', Menu)

    // Inicializar Abrir Menu Cart
    const abrirCart = document.querySelector('#abrirCart')
    abrirCart.addEventListener('click', menuOption)
    abrirCart.addEventListener('touchstart', menuOption)

    // Inicializar Fechar Menu Cart
    const fecharCart = document.querySelector('#fecharCart')
    const voltaLoja = document.querySelector('#voltaLoja')
    fecharCart.addEventListener('click', menuOption)
    fecharCart.addEventListener('touchstart', menuOption)
    voltaLoja.addEventListener('click', menuOption)
    voltaLoja.addEventListener('touchstart', menuOption)

    // Inicializar Abrir Menu Favo
    const abrirFavo = document.querySelector('#abrirFavo')
    abrirFavo   .addEventListener('click', menuOption)
    abrirFavo.addEventListener('touchstart', menuOption)
    // Inicializar Fechar Menu Favo
    const fecharFavo = document.querySelector('#fecharFavo')
    const voltaLojaFavo = document.querySelector('#voltaLojaFavo')
    fecharFavo.addEventListener('click', menuOption)
    fecharFavo.addEventListener('touchstart', menuOption)
    voltaLojaFavo.addEventListener('click', menuOption)
    voltaLojaFavo.addEventListener('touchstart', menuOption)

    // Inicializar Opção Menu Burguer
    const meusPedidos = document.querySelector('#meusPedidos')
    meusPedidos.addEventListener('click', Menu)
    meusPedidos.addEventListener('touchstart', Menu)
    meusPedidos.addEventListener('click', menuOption)
    meusPedidos.addEventListener('touchstart', menuOption)

    const meusFavoritos = document.querySelector('#meusFavoritos')
    meusFavoritos.addEventListener('click', Menu)
    meusFavoritos.addEventListener('touchstart', Menu)
    meusFavoritos.addEventListener('click', menuOption)
    meusFavoritos.addEventListener('touchstart', menuOption)
}