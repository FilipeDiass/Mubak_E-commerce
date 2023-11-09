const circleLeft = [...document.querySelectorAll('.circleLeft')]
const circleRigth = [...document.querySelectorAll('.circleRigth')]

function scroll(event){
    const campCards = document.querySelectorAll('.campCards')
    const leftOrRight = event.currentTarget.classList.contains('circleLeft')

    // Descobrindo o indice do botão que da Scroll
    const arrayClass = leftOrRight? circleLeft : circleRigth
    const indice = arrayClass.findIndex(el => el === event.currentTarget)

    if(leftOrRight){
        campCards[indice].scrollLeft -= 200
    }else{
        campCards[indice].scrollLeft += 200
    }

    event.currentTarget.removeEventListener('click', scroll)

    setTimeout(()=>{
        arrayClass[indice].addEventListener('click', scroll)
    }, 300)

}

export default function scrollCard(){
    circleLeft.forEach(el =>{
        el.addEventListener('click', scroll)
    })
    circleRigth.forEach(el =>{
        el.addEventListener('click', scroll)
    })
}