// Abrir/Fechar Menu Burguer
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

// Abrir/Fechar Menu Carrrinho
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

// Abrir/Fechar Menu Favorito
function menuFavorito(event){
    event.preventDefault()

    const containerFavo = document.querySelector('#containerFavo')

    containerFavo.classList.toggle('active')
    
    const chaveMenu = containerFavo.classList.contains('active')
    if(chaveMenu === true){
        containerFavo.style.visibility = 'visible'
    }else{
        containerFavo.style.visibility = 'hidden'
    }
}

export function iniciarMenu(){
    // Inicializar Abrir/Fechar Menu Burguer
    const menuBurgue = document.querySelector('#menuBurgue')
    menuBurgue.addEventListener('click', Menu)
    menuBurgue.addEventListener('touchstart', Menu)

    // Inicializar Abrir Menu Cart
    const abrirCart = document.querySelector('#abrirCart')
    abrirCart.addEventListener('click', menuCarrinho)
    abrirCart.addEventListener('touchstart', menuCarrinho)

    // Inicializar Fechar Menu Cart
    const fecharCart = document.querySelector('#fecharCart')
    const voltaLoja = document.querySelector('#voltaLoja')
    fecharCart.addEventListener('click', menuCarrinho)
    fecharCart.addEventListener('touchstart', menuCarrinho)
    voltaLoja.addEventListener('click', menuCarrinho)
    voltaLoja.addEventListener('touchstart', menuCarrinho)

    // Inicializar Fechar Menu Favo
    const fecharFavo = document.querySelector('#fecharFavo')
    const voltaLojaFavo = document.querySelector('#voltaLojaFavo')
    fecharFavo.addEventListener('click', menuFavorito)
    fecharFavo.addEventListener('touchstart', menuFavorito)
    voltaLojaFavo.addEventListener('click', menuFavorito)
    voltaLojaFavo.addEventListener('touchstart', menuFavorito)

    // Inicializar Opção Menu Burguer
    const meusPedidos = document.querySelector('#meusPedidos')
    meusPedidos.addEventListener('click', Menu)
    meusPedidos.addEventListener('touchstart', Menu)
    meusPedidos.addEventListener('click', menuCarrinho)
    meusPedidos.addEventListener('touchstart', menuCarrinho)

    const meusFavoritos = document.querySelector('#meusFavoritos')
    meusFavoritos.addEventListener('click', Menu)
    meusFavoritos.addEventListener('touchstart', Menu)
    meusFavoritos.addEventListener('click', menuFavorito)
    meusFavoritos.addEventListener('touchstart', menuFavorito)
}