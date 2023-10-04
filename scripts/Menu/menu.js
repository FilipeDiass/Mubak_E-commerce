const menuBurgue = document.querySelector('#menuBurgue')
function Menu(event){
    event.preventDefault()
    const campMobile = document.querySelector('#menuMobile')
    campMobile.classList.toggle('ativo')
    console.log(event)
    const chaveMenu = campMobile.classList.contains('ativo')
    if(chaveMenu === true){
        campMobile.style.visibility = 'visible'
    }else{
        campMobile.style.visibility = 'hidden'
    }
}
menuBurgue.addEventListener('click', Menu)
menuBurgue.addEventListener('touchstart', Menu)