//  Category Start 
const productSwiper = new Swiper(".product-swiper", {
  loop: true, // Enable looping
  effect: "slide",
  grabCursor: true,
  mousewheel: {
    enabled: true,
    sensitivity: 1,
    thresholdDelta: 50,
    thresholdTime: 400,
    forceToAxis: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
//  Category End 

// Blog Start 
const swiper = new Swiper('.blog-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  loopedSlides: 2,
  slidesOffsetAfter: 120,
  infinite: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 800,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 1.1,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 1.19,
      spaceBetween: 60
    }
  }
});

// Blog End