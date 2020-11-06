import Swiper from '../vendor/swiper.min.js';
import vars from '../_vars';

const reviewSlider = new Swiper(vars.$reviewSlider, {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.reviews-next-btn',
    prevEl: '.reviews-prev-btn',
  },
});