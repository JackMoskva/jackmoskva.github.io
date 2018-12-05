$('.sl').slick({
	arrows: false,
	adaptiveHeight: true,
	draggable: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	centerMode: false,
	centerPadding: '40px',
	respondTo: 'min',
	asNavFor: '.sl2-box',
	responsive: [
    {
      breakpoint: 415,
      settings: {
        centerMode: false,
        centerPadding: '20px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 376,
      settings: {
        centerMode: false,
        centerPadding: '20px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.sl2-box').slick({
	asNavFor: '.sl',
	variableWidth: true,
	dots: false,
	infinite: true,
	centerMode: false,
	centerPadding: '0px',
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: true,
	focusOnSelect: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	responsive: [
    {
      breakpoint: 569,
      settings: {
        centerMode: false,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 415,
      settings: {
      	accessibility: false,
      	prevArrow: false,
		nextArrow: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 415,
      settings: {
      	accessibility: false,
      	prevArrow: false,
		nextArrow: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});