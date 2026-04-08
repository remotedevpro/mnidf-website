document.addEventListener('DOMContentLoaded', function () {
    const heroSwiper = new Swiper('.heroSwiper', {

        loop: true,
        speed: 800,

        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },

        // effect: 'slide',   // 🔥 CHANGE THIS FIRST (debug)
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
            
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }

        
    });

});