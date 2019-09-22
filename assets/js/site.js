$(document).ready(function() {
    var width = 0;
    $('.slide').each(function() {
    width += $(this).outerWidth( true );
    });
    $('.sqs-wrapper').css('width', width + 250);
});
var slideWidth = $('.slide').each(function() {
    width += $(this).outerWidth( true );
    });
$(document).ready(function() {
    $('.gallery-next').click(function() {
        $('#slideshow').animate({left: '-='+slideWidth}, 500);
    });
});
