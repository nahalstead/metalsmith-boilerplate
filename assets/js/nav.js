var setupNavigation = function() {
      // Mobile Nav /////////////////////////////////////////////////////
       $('#mobileMenuLink a').on('click', function(e){
          $('#mobileNav').toggleClass('menu-open');
        }); 
};  
// run slider
$(document).ready(setupNavigation);
