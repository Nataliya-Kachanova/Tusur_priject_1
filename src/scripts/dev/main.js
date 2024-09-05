(function() {
   "use strict";

   //навигационное меню
   const root = document.documentElement;
   const navToggle = document.querySelector("#js-navToggle");
   navToggle.addEventListener("click", function () {
      root.classList.toggle("show-nav");
   });

   
   ymaps.ready(init);

   function init () {
       var myMap = new ymaps.Map("map", {
           // Центр карты, указываем коордианты
           center:[56.490202,84.949185],
           // Масштаб, тут все просто
           zoom: 15,
           // Отключаем все элементы управления
         //   controls: []
       }); 
               
       var myGeoObjects = [];
       const mediaQuery = window.matchMedia('(max-width: 420px)');
       
       // Наша метка, указываем коордианты
       myGeoObjects = new ymaps.Placemark([56.490202,84.949185],{
                       balloonContentBody: 'Pop Shop "1987"',
                       },{
                        
                       iconLayout: 'default#image',
                       // Путь до нашей картинки
                       iconImageHref: 'assets/images/address768.png', 
                       // Размер по ширине и высоте
                       iconImageSize: [67, 57],
                       // Смещение левого верхнего угла иконки относительно
                       // её «ножки» (точки привязки).
                       iconImageOffset: [-5, -35]
       });
                   
       var clusterer = new ymaps.Clusterer({
           clusterDisableClickZoom: false,
           clusterOpenBalloonOnClick: false,
       });
       
       clusterer.add(myGeoObjects);
       myMap.geoObjects.add(clusterer);
       // Отлючаем возможность изменения масштаба
      //  myMap.behaviors.disable('scrollZoom');
   
   }


   
   

   function addClickHandler (selector, url) {
      $(selector).on('click', function() {
         window.location.href = url;
      });
   }

   addClickHandler('.page-header__catalog', 'catalog.html');
   addClickHandler('#readArticle', 'articleharing.html');
   addClickHandler('#seeCollection', 'catalog.html');
   addClickHandler('.breadcrumbs__btn', 'index.html')


}) ();