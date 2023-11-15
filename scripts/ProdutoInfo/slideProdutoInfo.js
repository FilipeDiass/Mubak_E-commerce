export default function SlideProdutoInfo(){
    const swiper2 = new Swiper('.info-swiper2', {
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    })
    
    const swiper = new Swiper('.info-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    
        thumbs: {
        swiper: swiper2,
        },
    });
}