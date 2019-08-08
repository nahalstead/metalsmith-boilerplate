  
// initiate slider
var main = function() {
  $('.next').add('.slider img').click(function() {
    var currentSlide = $('.slider .active');
    var nextSlide = currentSlide.next();
    
    if (nextSlide.length == 0) {
    nextSlide = $('.slider img').first();
    }
    
    currentSlide.fadeOut(100).removeClass('active');
    nextSlide.fadeIn(100).addClass('active');
  });
  $('.prev').click(function() {
    var currentSlide = $('.active');
    var prevSlide = currentSlide.prev();
    
    if (prevSlide.length == 0) {
    prevSlide = $('.slider img').last();
    }
    
    currentSlide.fadeOut(100).removeClass('active');
    prevSlide.fadeIn(100).addClass('active');
  });
  
  // initiate thumbnail click function to find corresponding slide
  $('.slideshow_thumbnails img').click(function() {
  	// toggle inactive all images in slideshow 
  	$('.slider img').toggleClass('inactive');
    
    // hide thumbnails
    $('.slideshow_thumbnails').toggleClass('hide').removeClass('show');
    
    // show slider
    $('.slider').toggleClass('show').removeClass('hide');
    
    //Define current slide
    var currentSlide = $('.slider .active');
    currentSlide.toggleClass('active');
       
    //Define current slide integer
    var currentSlideInt = $('.slider .active').data("id");
    
    //Grab data-id value from thumbnail;
    var slideTo = $(this).data("id")
    
    //Make sure that this value is an integer;
		var slideToInt = parseInt(slideTo); 
      
    //Define "selected" slide to travel to
    var slideSelected = $('.slider .image-' + slideToInt);
     
     //move slider to the correct slide
    	slideSelected.fadeIn(100).toggleClass('active');
  })
};  

// run slider
$(document).ready(main);

// Count slides and thumbnails and assign to data-id for each element
	$(document).ready(function() {
    var i = 0;
    $(".slider img").each( function() {
    $(this).attr("data-id", +i);
    i++;
    });
  });
 $(document).ready(function() {
    var i = 0;
    $(".slider img").each( function() {
    $(this).addClass(("image-") + (+i) );
    i++;
    });
  });
  $(document).ready(function() {
    var i = 0;
    $(".slideshow_thumbnails img").each( function() {
    $(this).attr("data-id", +i);
    i++;
    });
  });
  
// Thumbnail toggle function
$(document).ready(function() {
	var count = $('.slider').children().length;
  var currentSlide = $('.slider .active');
  
	$('.slideshow_toggle_thumbnails').click(function() {
  	$('.slideshow_thumbnails').toggleClass('show');
    $('.slider').toggleClass('hide');
    $('.slider img').toggleClass('inactive');
    currentSlide.toggleClass('active');
  }
)}
);

// Set responsive image width & height function

function getWidth(){
  var e = null;
  e = document.getElementsByTagName('img');
  var imageWidth = $('.slider img').get(0).naturalWidth;
  var imageHeight = $('.slider img').get(0).naturalHeight;
  var t = $('.slider img').get(0).naturalHeight;
  var n = $('.slider img').get(0).naturalWidth;
  var r = ($(window).height() - 40) / t;    
  var i = $(window).width() / n;
  return r < i ? r / i * 100 + "%": "100%";
  }

$(document).ready(function() {
  $('.slider img').css("max-width",getWidth()  
  )
  $('.slider img').css({"display" : "block"
  })
});
$(window).resize(function(){
	$(".slider img").css("max-width",getWidth()
  )
});
