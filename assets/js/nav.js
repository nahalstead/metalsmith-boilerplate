var setupNavigation = function() {

      // MAKE SURE SUBNAV MARGIN-TOP NOT > 0 ////////////////////////////

      if ('#topNav .subnav') {
        var subnavMarginTop = parseInt(('#topNav .subnav').getStyle('marginTop'),10);
        if (subnavMarginTop > 0) {
          ('#topNav .subnav').setStyle('marginTop', 0);
        }
      }

      // Mobile Nav /////////////////////////////////////////////////////
      if ('#mobileMenuLink a') {
        ('#mobileMenuLink a').on('click', function(e){
          ('#mobileNav').toggleClass('menu-open');
        }); 

      // Break Nav if too long for nav and logo
      this.navBreaker();

      this.vertAlignCanvas();

      (window).on('resize', function () {
        this.vertAlignCanvas();
        this.navBreaker();
      }, this);
    }
};  
// run slider
$(document).ready(setupNavigation);
