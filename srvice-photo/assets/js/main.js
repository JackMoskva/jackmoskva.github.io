var causel1 = function () {

    $('.slider1').owlCarousel({
        loop: false,
        lazyLoad: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
};


var causel2 = function () {

    $('.slider2').owlCarousel({
        loop: false,
        lazyLoad: true,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })
};


var causel3 = function () {

    $('.slider3').slick({
        vertical: true,
        dots: true,
        verticalSwiping: true,
        slidesToShow: 2,
    });
    ;

};


var main = function () {

    $('body').on('click', '.tablist a', function (e) {
        e.preventDefault();
        var link = $(this).attr('href');
        $('.tablist a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        $('.map .tab-content .tab-pane').each(function () {
            $(this).css('display', 'none');
        });
        $(link).css('display', 'block');
    });

    $('body').on('click', '.header__buttons_activate', function (e) {
        $('.header__select_hidden').slideToggle();
    });

    $('body').on('click', '.header__select_hidden li', function (e) {
        $('.header__select_hidden').slideToggle();
    });



};


// domReady
$(function () {

    causel2();
    causel1();
    causel3();
    main();


});

$(".js-range-slider").ionRangeSlider();


$('.studio-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                arrows: false,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '40px',
                autoplay: false,
                arrows: false,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 401,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20px',
                autoplay: false,
                arrows: false,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20px',
                autoplay: false,
                arrows: false,
                infinite: true,
                dots: false
            }
        }
    ]
});

jQuery('.lightzoom').lightzoom({ 
    speed: 400, viewTitle: true 
});


$(function () {
    $("#servicePhoto").selectmenu();
    $("#checkoutPhoto").selectmenu();
    $("#checkoutStudio").selectmenu();
    $("#newsStudio").selectmenu();
});

$(".chosen-select").chosen();