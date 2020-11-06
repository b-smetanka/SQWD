import Swiper from '../vendor/swiper.min.js';
import vars from '../_vars';

const bannerSlider = new Swiper(vars.$bannerSlider, {
   loop: true,
   containerModifierClass: 'banner-slider-',
   slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + "0" + (index + 1) + '</span>';
      },
   }
});