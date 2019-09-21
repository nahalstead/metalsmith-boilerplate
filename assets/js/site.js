$(document).ready(function() {
    var width = 0;
    $('.slide img').each(function() {
    width += $(this).outerWidth( true );
    });
    $('.sqs-wrapper').css('width', width + 250);
});
var slideWidth = $('.slide img').each(function() {
    width += $(this).outerWidth( true );
    });
$(document).ready(function() {
    $('.gallery-next').click(function() {
        $('.slider').animate({left: '-='+slideWidth}, 500);
    });
});
