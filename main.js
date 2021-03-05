$(document).ready(function () {
    $('.slider').slick({
        dots: true
    });

    $('.slick-slide>img')
        .wrap('<span style="display:inline-block"></span>')
        .css('display', 'block')
        .parent()
        .zoom();

});