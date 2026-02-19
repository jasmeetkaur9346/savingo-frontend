/* Template Name: Applock
   Author: Themesdesign
   Version: 1.1.0
   Created: Jan 2021
   File Description: Main Js file of the template
*/

! function($) {
    "use strict";    
    // Loader 
    $(window).on('load.applockLoader', function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });
    // Menu
    $(window).on('scroll.applockNav', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
    });

    $('.navbar-nav a, .mouse-down').on('click.applockAnchor', function(event) {
        var $anchor = $(this);
        var targetSelector = $anchor.attr('href');
        if (!targetSelector || targetSelector.charAt(0) !== '#') {
            return;
        }

        var $target = $(targetSelector);
        if (!$target.length) {
            return;
        }

        $('html, body').stop().animate({
            scrollTop: $target.offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // Scrollspy
    $("#navbarCollapse").scrollspy({ offset: 70 });
    
    // Magnific Popup
    $('.mfp-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });
    // BACK TO TOP
    $(window).on('scroll.applockBackToTop', function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    }); 

    $(".back-to-top").on("click.applockBackToTop", function() {
        $("html, body").animate({ scrollTop: 0 }, 3000);
        return false;
    });
}(jQuery)
