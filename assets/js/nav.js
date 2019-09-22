var setupNavigation = function() {


      // Mobile Nav /////////////////////////////////////////////////////
      $('#mobileMenuLink a') {
        $('#mobileMenuLink a').on('click', function(e){
          $('#mobileNav').toggleClass('menu-open');
        }); 

      // Break Nav if too long for nav and logo
      this.navBreaker();

      this.vertAlignCanvas();

      $(window).on('resize', function () {
        this.vertAlignCanvas();
        this.navBreaker();
      }, this);
    }
};  
// run slider
$(document).ready(setupNavigation);
