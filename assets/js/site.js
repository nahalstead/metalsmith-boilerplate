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
    $(this).attr("data-id", +i);
    i++;
    });
  });
// Set width for .sqs-wrapper
$(document).ready(function() {
    var width = 0;
    $('.slide').each(function() {
    width += $(this).outerWidth( true );
    });
    $('.sqs-wrapper').css('width', width + 250);
    
// Initiate slider
    var sliderWidth = $('.slide').each(function() {
    width += $(this).outerWidth( true );
    });
    var slider = $('.sqs-wrapper');
    var sliderCount = $('.slide', slider).length;
    slider.width(sliderCount * sliderWidth);
    console.log(sliderCount);
    console.log(sliderWidth);
    
    $('.gallery-next').click(function() {
        $('.sqs-wrapper').animate({left: '-='+sliderWidth}, 500);
    });
    $('.gallery-prev').click(function() {
        $('.sqs-wrapper').animate({right: '-='+sliderWidth}, 500);
    });
});
