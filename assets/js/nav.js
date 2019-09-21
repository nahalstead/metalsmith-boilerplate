var setupNavigation = function() {

      // MAKE SURE SUBNAV MARGIN-TOP NOT > 0 ////////////////////////////

      if (Y.one('#topNav .subnav')) {
        var subnavMarginTop = parseInt(Y.one('#topNav .subnav').getStyle('marginTop'),10);
        if (subnavMarginTop > 0) {
          Y.all('#topNav .subnav').setStyle('marginTop', 0);
        }
      }

      // Mobile Nav /////////////////////////////////////////////////////
      if (Y.one('#mobileMenuLink a')) {
        Y.one('#mobileMenuLink a').on('click', function(e){
          Y.one('#mobileNav').toggleClass('menu-open');
        });

        var mobileNav = Y.one('#mobileNav');
        mobileNav && mobileNav.delegate('click', function(e) {
          e.currentTarget.ancestor('.folder').toggleClass('folder-open');
        }, '.folder > label');
      }

      // Break Nav if too long for nav and logo
      this.navBreaker();

      this.vertAlignCanvas();

      Y.one(window).on('resize', function () {
        this.vertAlignCanvas();
        this.navBreaker();
      }, this);
    }
// run slider
$(document).ready(setupNavigation);
