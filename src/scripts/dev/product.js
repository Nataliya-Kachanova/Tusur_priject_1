(function() {
   "use strict";
   const root = document.documentElement;
   //слайдер-детальная страница
   const swipers = document.querySelectorAll(".js-swiper");
   swipers.forEach(function (swpr) {
      new Swiper(swpr, {
         updateOnWindowResize: true,
         slidesPerView: "auto",
         freeMode: true,
         spaceBetween: 0,
         speed: 500,
         grabCursor: true,
         allowTouchMove: true,
         keyboard: {
            enabled: true,
         },
         pagination: {
            el: ".swiper-pagination",
            clickable: true
         },
         navigation: {
            nextEl: ".swiper-arrow-next",
            prevEl: ".swiper-arrow-prev",
            disabledClass: "arrow--disabled"
         }
      });
   });
   
   //попап
   const eventPP = document.querySelector("#js-productPP");
   if (eventPP) {
      const eventOpenBtn = document.querySelector("#js-eventOpenBtn");
      const hideButton = document.querySelector(".product__breadcrumbs");
      const closeEventPP = function (event) {
         function close() {
            document.removeEventListener("keyup", closeEventPP);
            eventPP.removeEventListener("click", closeEventPP);
            root.classList.remove("show-product-pp");
            hideButton.classList.remove("hidden");
         }
         switch (event.type) {
            case "keyup":
               if (event.key === "Escape" || event.keyCode === 27) close();
               break;
            case "click":
               if (
                  event.target === this ||
                  event.target.classList.contains("js-ppCloseBtn")
               )
               close();
               break;
         }
      };
      eventOpenBtn.addEventListener("click", function () {
         root.classList.add("show-product-pp");
         hideButton.classList.add("hidden");
         document.addEventListener("keyup", closeEventPP);
         eventPP.addEventListener("click", closeEventPP);
      });
   }
   const heartColor = document.querySelector('.product-card__icon-heart');
   if(heartColor) {
      heartColor.style.fill = "#0154bb";
   }
   
   //счетчик количество
   const increaseBtn = document.querySelector('#increaseBtn');
   const decreaseBtn = document.querySelector('#decreaseBtn');
   const cardQty = document.querySelector('#cardQty');

   let quantity = 1;
   
   function updateQuantity(action) {
      if (action === 'increase') {
         quantity++;
      } else if (action === 'decrease' && quantity > 1) {
         quantity--;
      }
      cardQty.textContent = quantity; 
   }

   increaseBtn.addEventListener('click', function() {
         updateQuantity('increase');
   });
   
   decreaseBtn.addEventListener('click', function() {
         updateQuantity('decrease');
   });

   //кнопки в карточках слайдера
   const buttonsHeart = Array.from(document.querySelectorAll('.product-slide__btn--heart'));
   const buttonsBasket = Array.from(document.querySelectorAll('.product-slide__btn--basket'));
   const qtyHeartDisplay = document.querySelector('.page-header__adder');
   const qtyBasketDisplay = document.querySelector('.page-header__adder2');
   const svgHeart = document.querySelector('.page-header__nav--heart');
   const svgBasket = document.querySelector('.page-header__nav--cart');

   let counters = {
      heart: 0,
      basket: 0
   };

   const updateQtyDisplay = (counter, display) => {
   display.textContent = counter;
   display.style.display = counter > 0 ? 'inline' : 'none';
   };

   const updateSvgColor = (svg, counter) => {
      if (svg) {
         svg.style.fill = counter > 0 ? '#1066d0' : 'transparent';
         svg.style.color = counter > 0 ? '#1066d0' : '#111';
      }
   };

   const handleButtonClick = (button, counterType, qtyDisplay, svg, iconClass) => {
      button.addEventListener('click', function() {
         if (button.classList.contains('active')) {
            counters[counterType]--;
            button.classList.remove('active');
         } else {
            counters[counterType]++;
            button.classList.add('active');
         }
         updateQtyDisplay(counters[counterType], qtyDisplay);
         updateSvgColor(svg, counters[counterType]);

         const icon = button.querySelector(iconClass);
         if (icon) {
            const fill = icon.getAttribute('fill');
            icon.setAttribute('fill', fill === 'transparent' ? '#1066d0' : 'transparent');
            icon.style.color = counters[counterType] > 0 ? '#1066d0' : '#111';
         }
      });
   };

   buttonsHeart.forEach(button => handleButtonClick(button, 'heart', qtyHeartDisplay, svgHeart, '.product-slide__icon1'));
   buttonsBasket.forEach(button => handleButtonClick(button, 'basket', qtyBasketDisplay, svgBasket, '.product-slide__icon2'));

   updateQtyDisplay(counters.heart, qtyHeartDisplay);
   updateQtyDisplay(counters.basket, qtyBasketDisplay);
   updateSvgColor(svgHeart, counters.heart);
   updateSvgColor(svgBasket, counters.basket);

   $('.product__breadcrumbs-btn').on('click', function() {
      window.location.href = 'index.html';
   });

}) ();