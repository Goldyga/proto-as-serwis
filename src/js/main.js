$(function () {
    var lastScrollTop;
    // $(window).scroll(function () {
    //     var currentScroll = $(this).scrollTop();
    //     if (currentScroll > lastScrollTop) {
    //         $('.nav').fadeOut();
    //     }
    //     else{
    //         $('.nav').fadeIn();
    //     }
    //     lastScrollTop = currentScroll;
    // });
    $(".nav__link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 300, function () {
                window.location.hash = hash;
            });
        }
    });
    setTimeout(function () {
        window.scrollTo(0, 1)
    }, 100);
    $('.flexslider_image').flexslider({
        slideshow: true,
        slideshowSpeed: 1500,
        animationLoop: true,
        controlNav: false,
        directionNav: false,
        touch: true,
        pauseOnAction: true,
        pauseOnHover: true,
    });
    $('.flexslider_services').flexslider({
        slideshow: false,
        controlNav: false,
        directionNav: false,
    });
    $('.gallery__indicator--direction-left').on('click', function () {
        $('.flexslider_image').flexslider('prev');
        return false;
    })
    $('.gallery__indicator--direction-right').on('click', function () {
        $('.flexslider_image').flexslider('next');
        return false;
    })
    $('.more_info').on('click', function () {
        $(this).parents('.about__services--wrapper').find('.about__services--more').removeClass('hide');
        $(this).parents('.about__services--wrapper').find('.flexslider_services').flexslider('next');
        return false;
    })
    $('.more_close').on('click', function () {
        $(this).parents('.about__services--wrapper').find('.about__services--more').addClass('hide');
        $(this).parents('.about__services--wrapper').find('.flexslider_services').flexslider('next');
        return false;
    })
    AOS.init();
});