const pointer1 = document.querySelector('#pointer1')
const pointer2 = document.querySelector('#pointer2')
function slideBanner(event){
    const marginBanner = document.querySelector('#marginSlide')

    marginBanner.classList.toggle('passar')

}
pointer1.addEventListener('click', slideBanner)
pointer2.addEventListener('click', slideBanner)