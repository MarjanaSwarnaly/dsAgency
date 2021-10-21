//LIGHTBOX CUSTOM
const lightbox = GLightbox({
  'href': 'https://youtu.be/WPqXP_kLzpo',
  'type': 'video',
  'source': 'youtube', //vimeo, youtube or local
  'width': 900,
});

// TOOLTIP
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// CAROUSAL
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {

})
// SWIPER-sponsor
const swiper = new Swiper('.sponsor-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
// SWIPER-FOLLOW US
const swiper2 = new Swiper('.follow-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 7,
  spaceBetween: 2,
});