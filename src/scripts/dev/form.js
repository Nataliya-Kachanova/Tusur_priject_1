(function() {
   "use strict";
   //маска для телефона
   const mobileMask = $('.js-mobileMask');
   if (mobileMask.length) {
      mobileMask.mask('+7 (000) 000 00 00', { placeholder: "+7 (___) ___ __ __" });
   }
   
   
   //селект     
   const jsSelectric = $(".js-selectric");
   if (jsSelectric.length) {
         jsSelectric.selectric({
         nativeOnMobile: false,
         onOpen: function() {
            $('.custom-select').addClass('open');
            $('.custom-title').addClass('open2');
            
         },
         onClose: function() {
            $('.custom-select').removeClass('open');
            $('.custom-title').removeClass('open2');
         }
      });
   } 

   $.get('countries.html', function(data) {
      $('#countries').append(data).selectric({
         maxHeight: 200
      });
   });

   $('.js-selectric').on('selectric-init', function() {
      const scrollElement = $('.selectric-scroll')[0];
      if (scrollElement) {
         new SimpleBar(scrollElement);
      }
   }).selectric('refresh');
   

   function handleSelectricEvents(className, element) {
      $(element).on('selectric-open', function() {
         $(this).closest('.selectric-wrapper').addClass(className);
      }).on('selectric-close', function() {
         $(this).closest('.selectric-wrapper').removeClass(className);
      });
   }
   
   handleSelectricEvents('open3', '.custom-select select');
   handleSelectricEvents('open4', 'select');

   //календарь
   // const dateField = $(".js-dateField");
   // if (dateField.length) {
   //    const pickerInit = function (pick) {
   //       const dateInput = pick.find(".js-dateInput");
   //       const dateDay = pick.find(".js-dateDay");
   //       const dateMonth = pick.find(".js-dateMonth");
   //       const dateYear = pick.find(".js-dateYear");
   //       const dateConfig = {
   //          autoClose: true,
   //          navTitles: {
   //             days: "MMMM <i>yyyy</i>",
            
   //          },
   //          onSelect: function ({ date }) {
   //             dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
   //             dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
   //             dateYear.val(date ? date.getFullYear() : "");
   //          }
   //       };
   //       new AirDatepicker(dateInput[0], dateConfig);
   //    };
   //    $.each(dateField, function (i) {
   //       pickerInit($(this));
   //    });
   // }
   const dateField = $(".js-dateField");
if (dateField.length) {
  const pickerInit = function (pick) {
    const dateInput = pick.find(".js-dateInput");
    const dateDay = pick.find(".js-dateDay");
    const dateMonth = pick.find(".js-dateMonth");
    const dateYear = pick.find(".js-dateYear");

    const dateConfig = {
      autoClose: true,
      minDate: new Date(),
      navTitles: {
        days: "MMMM <i>yyyy</i>"
      },
      onSelect: function ({ date }) {
        dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
        dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
        dateYear.val(date ? date.getFullYear() : "");
      }
    };
    new AirDatepicker(dateInput[0], dateConfig);
  };

  $.each(dateField, function (i) {
    pickerInit($(this));
  });
}
})()