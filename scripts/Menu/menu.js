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
        if(window.innerWidth > 700) body.style.overflow = 'hidden'
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
            if(window.innerWidth > 700) body.style.overflow = 'hidden'
        }else{
            containerCart.style.visibility = 'hidden'
            body.style.overflow = 'auto'
        }
    }else{
        containerFavo.classList.toggle('active')
        const chaveMenu = containerFavo.classList.contains('active')
        if(chaveMenu === true){
            containerFavo.style.visibility = 'visible'
            if(window.innerWidth > 700) body.style.overflow = 'hidden'
        }else{
            containerFavo.style.visibility = 'hidden'
            body.style.overflow = 'auto'
        }
    }
}

export default function iniciarMenu(){
    window.addEventListener('resize', ()=>{
        const campMobile = document.querySelector('#menuMobile')
        const campIcones = document.querySelector('#campIcones')
        const body = document.querySelector('body')
        if(window.innerWidth > 700){
            campMobile.classList.remove('ativo')
            campIcones.classList.remove('anima')
            campMobile.style.visibility = 'hidden'
            menuBurgue.style.zIndex = '0'
            body.style.overflow = 'auto'
        }
    });

    // Inicializar Abrir/Fechar Menu Burguer
    const menuBurgue = document.querySelector('#menuBurgue')
    menuBurgue.addEventListener('click', Menu)
    menuBurgue.addEventListener('touchend', Menu)

    // Inicializar Abrir Menu Cart
    const abrirCart = document.querySelector('#abrirCart')
    abrirCart.addEventListener('click', menuOption)
    abrirCart.addEventListener('touchend', menuOption)

    // Inicializar Fechar Menu Cart
    const fecharCart = document.querySelector('#fecharCart')
    const voltaLoja = document.querySelector('#voltaLoja')
    fecharCart.addEventListener('click', menuOption)
    fecharCart.addEventListener('touchend', menuOption)
    voltaLoja.addEventListener('click', menuOption)
    voltaLoja.addEventListener('touchend', menuOption)

    // Inicializar Abrir Menu Favo
    const abrirFavo = document.querySelector('#abrirFavo')
    abrirFavo   .addEventListener('click', menuOption)
    abrirFavo.addEventListener('touchend', menuOption)
    // Inicializar Fechar Menu Favo
    const fecharFavo = document.querySelector('#fecharFavo')
    const voltaLojaFavo = document.querySelector('#voltaLojaFavo')
    fecharFavo.addEventListener('click', menuOption)
    fecharFavo.addEventListener('touchend', menuOption)
    voltaLojaFavo.addEventListener('click', menuOption)
    voltaLojaFavo.addEventListener('touchend', menuOption)

    // Inicializar Opção Menu Burguer
    const meusPedidos = document.querySelector('#meusPedidos')
    meusPedidos.addEventListener('click', Menu)
    meusPedidos.addEventListener('touchend', Menu)
    meusPedidos.addEventListener('click', menuOption)
    meusPedidos.addEventListener('touchend', menuOption)

    const meusFavoritos = document.querySelector('#meusFavoritos')
    meusFavoritos.addEventListener('click', Menu)
    meusFavoritos.addEventListener('touchend', Menu)
    meusFavoritos.addEventListener('click', menuOption)
    meusFavoritos.addEventListener('touchend', menuOption)
}