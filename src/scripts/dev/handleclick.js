(function() {
    "use strict";
 
 const item1 = $('.page-header__nav--heart');
    const item2 = $('.page-header__nav--cart');
    const item3 = $('.page-header__nav--user');
 
    function handleClick(element) {
       element.on('click', function() {
          if (element) {
             element.css('fill', '#1066d0');
             element.css('color', '#1066d0');
          } else {
             element.css('fill', 'transparent');
             element.css('color', '#111');
          }
       });
    }
 
    handleClick(item1);
    handleClick(item2);
    handleClick(item3);
 
 
 }) ();