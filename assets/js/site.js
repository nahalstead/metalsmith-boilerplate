$(document).ready(function() {
    var width = 0;
    $('.slide').each(function() {
    width += $(this).outerWidth( true );
    });
    $('.sqs-wrapper').css('width', width + 250);
});
var slider = $('#slideshow');
var sliderCount = $('div', slider).length;
slider.width(sliderCount * sliderWidth);
var sliderWidth = $('.slide').each(function() {
    width += $(this).outerWidth( true );
    });
$(document).ready(function() {
    $('.gallery-next').click(function() {
        $('#slideshow').animate({left: '-='+sliderWidth}, 500);
    });
});
