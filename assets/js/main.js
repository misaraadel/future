$(document).ready(function () {
    //loading page 
    setTimeout(function () {
        $('body').addClass('loaded');
        $("body").css("overflow", "auto");
    });
    //scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }

    });
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //our partner carousel 
    $('.owl-partner').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        lazyLoadEager: 1,
        autoplayHoverPause: true,
        lazyLoad: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
});