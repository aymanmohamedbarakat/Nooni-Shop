const swiper = new Swiper(".team-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  loopAdditionalSlides: 1,
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
  loopFillGroupWithBlank: true,
  loopAdditionalSlides: 1,
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
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});