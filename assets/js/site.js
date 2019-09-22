// Count slides and thumbnails and assign to data-id for each element
$(document).ready(function() {
    var i = 0;
    $(".sqs-wrapper .slide").each( function() {
    $(this).attr("data-id", +i);
    i++;
    });
  });
 $(document).ready(function() {
    var i = 0;
    $(".sqs-wrapper .slide").each( function() {
    $(this).addClass(("image-") + (+i) );
    i++;
    });
  });
  $(document).ready(function() {
    var i = 0;
    $(".sqs-wrapper .slide").each( function() {
    $(this).attr("data-slide-url", +i);
    i++;
    });
  });
// Set width for .sqs-wrapper
$(document).ready(function() {
    var width = 0;
    $('.sqs-wrapper .slide').width(function() {
    width += $(this).outerWidth( true );
    });
    $('.sqs-wrapper').css('width', width + 250);
    
// Initiate slider
    var sliderWidth = $('.sqs-wrapper .slide').width;
    var slider = $('.sqs-wrapper');
    var sliderCount = $('.slide', slider).length;
    slider.width(sliderCount * sliderWidth);
    console.log(sliderCount);
    console.log(sliderWidth);
    
    $('.gallery-next').click(function() {
        $('.sqs-wrapper').animate({left: '-='+sliderWidth}, 500);
        window.history.pushState({$(".sqs-wrapper .slide").attr("data-slide-url")}, "Title", "/new-url");
    });
    $('.gallery-prev').click(function() {
        $('.sqs-wrapper').animate({left: '-='+sliderWidth}, 500);
    });
});
