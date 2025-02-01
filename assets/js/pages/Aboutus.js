
const swiper = new Swiper(".team-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  loopAdditionalSlides: 4,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});



const brandsSwiper = new Swiper(".brands-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  loopAdditionalSlides: 3,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});
