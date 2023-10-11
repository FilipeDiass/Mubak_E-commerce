function slideBanner(event){
    // event.preventDefault();
    if(event.pointerType === 'touch') return;
    
    console.log(event)
    if(pointer1 === event.currentTarget || (imgSlide.scrollLeft < 100 && imgSlide.scrollLeft > 0) ){
        imgSlide.scrollLeft = 0
        pointer1.style.backgroundColor = 'white'
        pointer2.style.backgroundColor = 'initial'
    }else if(pointer2 === event.currentTarget || imgSlide.scrollLeft >= 100){
        imgSlide.scrollLeft = 700
        pointer1.style.backgroundColor = 'initial'
        pointer2.style.backgroundColor = 'white'
    }
}



export default function iniciaSlideBanner(){
    const pointer1 = document.querySelector('#pointer1')
    const pointer2 = document.querySelector('#pointer2')
    const imgSlide = document.querySelector('#imgSlide')

    pointer1.addEventListener('click', slideBanner)
    pointer2.addEventListener('click', slideBanner)
    pointer1.addEventListener('touchstart', slideBanner)
    pointer2.addEventListener('touchstart', slideBanner)
    imgSlide.addEventListener('touchend', slideBanner)
}