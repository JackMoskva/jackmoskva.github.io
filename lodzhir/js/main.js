(function($){
  $(function() {
    $('.menu-nav-icon').on('click', function() {
      $(this).closest('.main-nav')
        .toggleClass('menu_state_open');
    });
    
    $('.nav-list').on('click', function() {
      // do something

      $(this).closest('.main-nav')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);

// $(function(){
//     $('.js-timeline').Timeline();
//   });

document.getElementById("horizontal-scroller")
  .addEventListener('wheel', function(event) {
    if (event.deltaMode == event.DOM_DELTA_PIXEL) {
      var modifier = 1;
      // иные режимы возможны в Firefox
    } else if (event.deltaMode == event.DOM_DELTA_LINE) {
      var modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
      var modifier = this.clientHeight;
    }
    if (event.deltaY != 0) {
      // замена вертикальной прокрутки горизонтальной
      this.scrollLeft += modifier * event.deltaY;
      event.preventDefault();
    }
  });

  $( function() {
    $( ".button-1" ).on( "click", function() {
      $( ".modal-1" ).addClass( "active" );
    });

    $( ".button-2" ).on( "click", function() {
      $( ".modal-2" ).addClass( "active" );
    });

    $( ".button-3" ).on( "click", function() {
      $( ".modal-3" ).addClass( "active" );
    });

    $( ".button-4" ).on( "click", function() {
      $( ".modal-4" ).addClass( "active" );
    });

    $( ".button-5" ).on( "click", function() {
      $( ".modal-5" ).addClass( "active" );
    });

    $( ".button-6" ).on( "click", function() {
      $( ".modal-6" ).addClass( "active" );
    });

    $( ".button-7" ).on( "click", function() {
      $( ".modal-7" ).addClass( "active" );
    });

    $( ".button-8" ).on( "click", function() {
      $( ".modal-8" ).addClass( "active" );
    });

    $( ".button-9" ).on( "click", function() {
      $( ".modal-9" ).addClass( "active" );
    });

    $( ".button-10" ).on( "click", function() {
      $( ".modal-10" ).addClass( "active" );
    });
 
   function callback() {
      setTimeout(function() {
        $( ".close-modal" ).removeClass( ".active" );
      }, 1500 );
    }

    $( ".close-modal" ).on( "click", function() {
      $( ".modal" ).removeClass( "active", 1000, callback );
    });

  function callback() {
      setTimeout(function() {
        $( "#effect" ).addClass( "newClass" );
      }, 1500 );
    }
  } );
