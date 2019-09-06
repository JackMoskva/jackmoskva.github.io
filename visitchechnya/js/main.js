$('a[href*="#features"]').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
    }
    return false;
});


$(function () {
    $(".btn").on('click', function() {
        $('#exampleModal').modal('hide');
    });
});


$('.main-events-slides').slick({
  vertical: true,
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: '50px',
  cssEase: 'ease-in',
  asNavFor: '.event-img-slides',
  responsive: [
    {
      breakpoint: 1570,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1199.99,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.event-img-slides').slick({
  dots: false,
  arrows: false,
  infinite: false,
  fade: true,
  cssEase: 'linear',
  asNavFor: '.main-events-slides',
});


$.widget( 'app.selectmenu', $.ui.selectmenu, {
  _drawButton: function() {
    this._super();
    var selected = this.element
    .find( '[selected]' )
    .length,
        placeholder = this.options.placeholder;

    if (!selected && placeholder) {
      this.buttonItem.text(placeholder);
    }
  }
});


$(document).ready(function() {
  $('.select-town').selectmenu({
    placeholder: 'Город  прибытия'
  });
  $('.select-pass').selectmenu({
    placeholder: '1 пассажир, эконом'
  });
  $('.select-kind-tour').selectmenu({
    placeholder: 'Вид тура'
  });
  $('.select-type-tour').selectmenu({
    placeholder: 'Тип'
  });
  $('.select-duration-tour').selectmenu({
    placeholder: 'Продолжительность'
  });
  $('.select-sort-tour').selectmenu({
    placeholder: 'Сортировать'
  });
  $('.select-personal-town').selectmenu({
    placeholder: 'Город'
  });
  $('.select-personal-pay').selectmenu({
    placeholder: 'Способ оплаты'
  });
  $('.category').selectmenu({
    placeholder: 'Категория'
  });
});


$( function() {
    $( ".datepicker" ).datepicker({
      showOn: "button",
      buttonImage: "img/calendar-icon.svg",
      buttonImageOnly: true,
      buttonText: "Select date",
      showOtherMonths: true,
      selectOtherMonths: true,
      monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                    'Июл','Авг','Сен','Окт','Ноя','Дек'],
      dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
      dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
      dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
      weekHeader: 'Нед',
      dateFormat: 'd MM, DD',
      isRTL: false,
      showMonthAfterYear: false
    });
  } );


$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          showOn: "button",
          buttonImage: "img/calendar-icon.svg",
          buttonImageOnly: true,
          buttonText: "Select date",
          showOtherMonths: true,
          selectOtherMonths: true,
          monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
          monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                    'Июл','Авг','Сен','Окт','Ноя','Дек'],
          dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
          dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
          dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
          weekHeader: 'Нед',
          dateFormat: 'd MM, DD',
          isRTL: false,
          showMonthAfterYear: false
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        showOn: "button",
        buttonImage: "img/calendar-icon.svg",
        buttonImageOnly: true,
        buttonText: "Select date",
        showOtherMonths: true,
        selectOtherMonths: true,
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                    'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Нед',
        dateFormat: 'd MM, DD',
        isRTL: false,
        showMonthAfterYear: false
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );

$('#play_button').click(function(){
  $('video')[0].play();
});


$('.tour-reviews-slider').slick({
  dots: false,
  arrows: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false
      }
    },
    {
      breakpoint: 639,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// Dropdown Passagers
$(document).ready(function() {
  $(".dropdown__select").on("click", function() {
    $(this).toggleClass("active");
    $(".dropdown__list").slideToggle();
  });

  $(".dropdown__amount-minus").on("click", function() {
    var i = $(this)
      .siblings(".dropdown__amount-number")
      .text();
    $(this)
      .siblings(".dropdown__amount-number")
      .text(--i);
  });

  $(".dropdown__amount-plus").on("click", function() {
    var i = $(this)
      .siblings(".dropdown__amount-number")
      .text();
    $(this)
      .siblings(".dropdown__amount-number")
      .text(++i);
  });
});

$(document).ready(function() {
  function dash(line1, line2) {
    $(".path-town").removeAttr('style');
    
    $(line1).show();
    $(line1).animate(
      {
        "stroke-dashoffset": 0
      },
      2000,
      function() {
        if (line2) {
          $(line2).show();
          $(line2).animate(
            {
              "stroke-dashoffset": 0
            },
            2000
          );
        }
      }
    );
  }
//
  $("#btnParis").on("click", function() {
    dash("#pathParis", "#pathMoskow");
  });

  
  $("#btnBishkek").on("click", function() {
    dash("#pathBishkek");
  });

  $("#btnMoskow").on("click", function() {
    dash("#pathMoskow");
  });

  $("#btnPekin").on("click", function() {
    dash("#pathPekin", "#pathMoskow");
  });

  $("#btnSurgut").on("click", function() {
    dash("#pathSurgut");
  });

  $("#btnShardja").on("click", function() {
    dash("#pathShardja");
  });

  $("#btnAntalia").on("click", function() {
    dash("#pathAntalia");
  });

  $("#btnStambul").on("click", function() {
    dash("#pathStambul");
  });

  $("#btnTallin").on("click", function() {
    dash("#pathTallin", "#pathMoskow");
  });

  $("#btnOslo").on("click", function() {
    dash("#pathOslo", "#pathMoskow");
  });

  $("#btnLondon").on("click", function() {
    dash("#pathLondon", "#pathMoskow");
  });

  $("#btnLeipzig").on("click", function() {
    dash("#pathLeipzig", "#pathMoskow");
  });

  $("#btnRostov").on("click", function() {
    dash("#pathRostov");
  });

  $("#btnSeul").on("click", function() {
    dash("#pathSeul", "#pathMoskow");
  });

  $("#btnTokyo").on("click", function() {
    dash("#pathTokyo", "#pathMoskow");
  });
});