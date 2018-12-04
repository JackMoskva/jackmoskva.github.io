$('.sl').slick({
	arrows: false,
	adaptiveHeight: true,
	asNavFor: '.sl2-box'
});

$('.sl2-box').slick({
	asNavFor: '.sl',
	dots: false,
	centerMode: true,
	centerPadding: '0px',
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: true,
	focusOnSelect: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next')
});