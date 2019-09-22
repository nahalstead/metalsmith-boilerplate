$(document).ready(function() {
    var width = 0;
    $('.slide').each(function() {
    width += $(this).outerWidth( true );
    });
    $('.sqs-wrapper').css('width', width + 250);

    var slider = $('.sqs-wrapper');
    var sliderCount = $('div', slider).length;
    slider.width(sliderCount * sliderWidth);
    var sliderWidth = $('.slide').each(function() {
    width += $(this).outerWidth( true );
    });

    $('.gallery-next').click(function() {
        $('.sqs-wrapper').animate({left: '-='+sliderWidth}, 500);
    });
});
