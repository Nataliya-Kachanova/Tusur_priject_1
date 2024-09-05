(function() {
   "use strict";

   //слайдер №1 на декстопе
   const swiper1 = document.querySelectorAll(".js-swiper1");
   swiper1.forEach(function (swpr) {
      new Swiper (swpr, {
         slidesPerView: 1,
         spaceBetween: 0,
         initialSlide: 2,
         allowTouchMove: true,
         grabCursor: true,
         keyboard: {
            enabled: true,
         },
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
               let customIndex = [82, 85, 87, 88, 89];
               return '<span class="' + className + '">' + customIndex[index] + "</span>";
            },
         },
         on: {
            slideChange: function () {
               let year = document.querySelector('.collection__button-year');
               let currentSlideIndex = this.activeIndex;
               switch (currentSlideIndex) {
                  case 0:
                     year.textContent = '1982';
                     break;
                  case 1:
                     year.textContent = '1985';
                     break;
                  case 2:
                     year.textContent = '1987';
                     break;
                  case 3:
                     year.textContent = '1988';
                     break;
                  case 4:
                     year.textContent = '1989';
                     break;
                  default:
                     year.textContent = '';
                     break;
               }
            }
         }
      });
   });
}) ();