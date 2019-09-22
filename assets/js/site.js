$(document).ready(function() {
    var width = 0;
    $('.slide').each(function() {
    width += $(this).outerWidth( true );
    });
    $('.sqs-wrapper').css('width', width + 250);
    console.log(width);

    var sliderWidth = 500;
    var slider = $('.sqs-wrapper');
    var sliderCount = $('.slide', slider).length;
    slider.width(sliderCount * sliderWidth);
    console.log(sliderCount);
    
    $('.gallery-next').click(function() {
        $('.sqs-wrapper').animate({left: '-='+sliderWidth}, 500);
    });
    $('.gallery-prev').click(function() {
        $('.sqs-wrapper').animate({right: '-='+sliderWidth}, 500);
    });
});
