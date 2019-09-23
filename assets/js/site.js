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
//$(document).ready(function() {
//   var width = 0;
//    $('.sqs-wrapper .slide').width(function() {
//    width += $(this).outerWidth( true );
//    });
//    $('.sqs-wrapper').css('width', width + 250);
 
// Initiate slider
$(document).ready(function() {   
        $('.sqs-wrapper').flickity({
        // options
        accessibility: true,
        setGallerySize: false,
        draggable: false,    
        cellAlign: 'left',
        contain: true,
        hash: true,
        autoplay: false,
        imagesLoaded: true,
        pageDots: false,
        groupCells: false   
    });
});    
