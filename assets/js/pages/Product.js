
const quantitySpan = document.querySelector(".quantity span");

function quantityMinus() {
  let currentValue = +quantitySpan.textContent;
  if (currentValue > 1) {
    quantitySpan.textContent = currentValue - 1;
  }
}

function quantityPlus() {
  let currentValue = +quantitySpan.textContent;
  quantitySpan.textContent = currentValue + 1;
}



const swiper = new Swiper(".related-products-swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
