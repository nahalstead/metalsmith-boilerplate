$(document).ready(function() {
var width = 0;
$('.slide img').each(function() {
    width += $(this).outerWidth( true );
});
$('.sqs-wrapper').css('width', width + 250);
});
