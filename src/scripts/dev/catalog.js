(function() {
   "use strict";

   //фильтр
   const root = document.documentElement;
   const rangeSlider = document.querySelector('#range-slider');
   const filterForm = document.querySelector("#js-filter");
   const jsForm = document.querySelector("#js-filterForm");

   if (rangeSlider) {
      noUiSlider.create(rangeSlider, {
         start: [650, 5000],
         connect: true,
         step: 1,
         range: {
            'min': [0],
            'max': [5650]
         }
      });

      const input0 = document.querySelector('#input-0');
      const input1 = document.querySelector('#input-1');
      const inputs = [input0, input1];

      rangeSlider.noUiSlider.on('update', function(values, handle){
         inputs[handle].value = Math.round(values[handle]);
      });

      const setRangeSlider = (i, value) => {
         let arr = [null, null];
         arr[i] = value;
         rangeSlider.noUiSlider.set(arr);
      };

      inputs.forEach((el, index) => {
         el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
         });
      });

      const updateSliderRange = () => {
         let rangeMax;
         if (window.innerWidth >= 1920) {
            rangeMax = 5650;
         } else if (window.innerWidth > 768) {
            rangeMax = 5650;
         } else if (window.innerWidth > 320) {
            rangeMax = 6050;
         } else {
            rangeMax = 6050;
         }
         rangeSlider.noUiSlider.updateOptions({
            range: {
               'min': 0,
               'max': rangeMax
            }
         });
      };

      updateSliderRange(); 
   }

   if (filterForm) {
      const filterBtn = document.querySelector("#js-btnFilter");
      const closeEventPP = function (event) {
         function close() {
            document.removeEventListener("keyup", closeEventPP);
            filterBtn.removeEventListener("click", closeEventPP);
            root.classList.remove("show-filter-pp");
         }
      switch (event.type) {
         case "keyup":
            if (event.key === "Escape" || event.keyCode === 27) close();
            break;
         case "click":
            if (
               event.target === this ||
               event.target.classList.contains("js-filterCloseBtn")
            )
               close();
            break;
         }
      };
      filterBtn.addEventListener("click", function () {
         root.classList.add("show-filter-pp");
         document.addEventListener("keyup", closeEventPP);
         filterForm.addEventListener("click", closeEventPP);
      });
   }
   if(jsForm) {
      const resetBtn = document.querySelector(".js-resetBtn");
      resetBtn.addEventListener("click", function () {
         jsForm.reset();
         rangeSlider.noUiSlider.set([650, 5000]); 
      });
   }

   let buttonsHeart = Array.from(document.querySelectorAll('.catalog-card__btn--heart'));
   let buttonscart = Array.from(document.querySelectorAll('.catalog-card__btn--cart'));
   const adderDisplayHeart = document.querySelector('.page-header__adder');
   const adderDisplayCart = document.querySelector('.page-header__adder2');
   let counterHeart = 0;
   let counterCart = 0;

   // Обработка счетчика
   const updateadderDisplay = (adderDisplay, counter, navSelector) => {
      adderDisplay.style.display = counter > 0 ? 'inline' : 'none';
      adderDisplay.textContent = counter;

      let svg = document.querySelector(navSelector);
      if (svg) {
         svg.style.fill = counter > 0 ? '#1066d0' : 'transparent';
         svg.style.color = counter > 0 ? '#1066d0' : '#111';
      }
   };

   // Обработка кнопок
   const handleButtonClick = (buttons, counter, adderDisplay, navSelector, iconClass) => {
      buttons.forEach(button => {
         button.addEventListener('click', function() {
            if (button.classList.contains('active')) {
               counter--;
               button.classList.remove('active');
            } else {
               counter++;
               button.classList.add('active');
            }
            updateadderDisplay(adderDisplay, counter, navSelector);

            let svg = this.querySelector(iconClass);
            if (svg) {
               let fill = svg.getAttribute('fill');
               svg.setAttribute('fill', fill === 'transparent' ? '#1066d0' : 'transparent');
               svg.style.color = counter > 0 ? '#1066d0' : '#111';
            }
         });
      });

      // Начальный счетчик
      updateadderDisplay(adderDisplay, counter, navSelector);
   };

   // Установка обработчиков событий для всех кнопок
   handleButtonClick(buttonsHeart, counterHeart, adderDisplayHeart, '.page-header__nav--heart', '.catalog-card__icon1');
   handleButtonClick(buttonscart, counterCart, adderDisplayCart, '.page-header__nav--cart', '.catalog-card__icon2');
})()