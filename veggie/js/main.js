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