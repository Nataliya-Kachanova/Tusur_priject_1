(function() {
   "use strict";

   //слайдер №2 на декстопе
   const paginationText = [
      "Lucky Strike, 1987",
      "Statue of Liberty, 1986",
      "Andy Mouse, 1986",
      "Crack Down, 1986",
      "Paris poster, 1986"
   ];
   
   $('#js-sliderSlick').slick({
      slidesToShow: 4,
      centerMode: true,
      variableWidth: true,
      initialSlide: 2,
      centerPadding: '0px',
      speed: 1000,
      touchThreshold: 10,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      responsive: [
         {
            breakpoint: 1660,
            settings: {
               slidesToShow: 2,
               
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   });

   $('#js-sliderSlick').on('afterChange', function(event, slick, currentSlide){
      $('#paginationText').text(paginationText[currentSlide]);
   });

}) ();