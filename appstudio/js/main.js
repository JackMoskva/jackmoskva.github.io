$('form').submit(function (e) {
    e.preventDefault();

    $('#form').trigger( 'reset' );

});

$(".phone").mask("+38 (999) 999-9999");
