const menuBurgue = document.querySelector('#menuBurgue')
function Menu(event){
    event.preventDefault()
    const campMobile = document.querySelector('#menuMobile')
    const campIcones = document.querySelector('#campIcones')
    campMobile.classList.toggle('ativo')
    campIcones.classList.toggle('ativo')

    const chaveMenu = campMobile.classList.contains('ativo')

    if(chaveMenu === true){
        campMobile.style.visibility = 'visible'
    }else{
        campMobile.style.visibility = 'hidden'
    }
}
menuBurgue.addEventListener('click', Menu)
menuBurgue.addEventListener('touchstart', Menu)