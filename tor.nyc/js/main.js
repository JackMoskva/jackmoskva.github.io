$('.sl').slick({
	asNavFor: '.sl2'
});

$('.sl2').slick({
	dots: false,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	centerMode: true,
	centerPadding: '0px',
	arrows: true,
	asNavFor: '.sl',
	focusOnSelect: true,
	responsive: [
    {
      breakpoint: 991,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 5
      }
    },
    {
      breakpoint: 769,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 569,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2
      }
    }
  ]
});