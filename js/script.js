const heroSwiper = new Swiper('.heroSwiper', {
  loop: true,
  speed: 800,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

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
  },

  on: {
    slideChangeTransitionStart: function () {
      // Reset animation
      document.querySelectorAll('.hero-content').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
      });
    },
    slideChangeTransitionEnd: function () {
      // Animate active slide content
      const activeSlide = document.querySelector('.swiper-slide-active .hero-content');
      if (activeSlide) {
        activeSlide.style.opacity = 1;
        activeSlide.style.transform = 'translateY(0)';
      }
    }
  }
});