const circleLeft = document.querySelector('.circleLeft')
const circleRight = document.querySelector('.circleRigth')
export default function scrollCard(){
    const campCards = document.querySelector('.campCards')
    function scroll(event){
        if(event.currentTarget === circleRight){
            campCards.scrollLeft += 800
            event.currentTarget.removeEventListener('click', scroll)
        }else if(event.currentTarget === circleLeft){
            campCards.scrollLeft -= 800
            event.currentTarget.removeEventListener('click', scroll)
        }
        
        setTimeout(()=>{
            circleRight.addEventListener('click', scroll)
            circleLeft.addEventListener('click', scroll)
        }, 550)
    }
    circleLeft.addEventListener('click', scroll)
    circleRight.addEventListener('click', scroll)
}



