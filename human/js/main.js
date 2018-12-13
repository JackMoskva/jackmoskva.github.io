$(document).ready(function() {
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
});

$('.sl').slick({
	arrows: false,
	dots: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

$(window).scroll(function(){
    // 200px от верха
    if ($(window).scrollTop() > '200'){
      $('.navbar').css({"background":"rgba(11, 31, 44, 0.8)"});
    }
  });

