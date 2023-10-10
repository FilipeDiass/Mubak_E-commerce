function slideBanner(event){
    event.preventDefault()
    const marginBanner = document.querySelector('#marginSlide')

    if(pointer1 === event.currentTarget){
        marginBanner.classList.remove('passar')
        pointer1.style.backgroundColor = 'white'
        pointer2.style.backgroundColor = 'initial'
    }else{
        marginBanner.classList.add('passar')
        pointer1.style.backgroundColor = 'initial'
        pointer2.style.backgroundColor = 'white'
    }
}


export default function iniciaSlideBanner(){
    const pointer1 = document.querySelector('#pointer1')
    const pointer2 = document.querySelector('#pointer2')

    pointer1.addEventListener('click', slideBanner)
    pointer2.addEventListener('click', slideBanner)
    pointer1.addEventListener('touchstart', slideBanner)
    pointer2.addEventListener('touchstart', slideBanner)
}