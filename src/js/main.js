$(function () {
    $(".nav__link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
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
    // $(".gallery__rslides").responsiveSlides({
    //     auto: false, // Boolean: Animate automatically, true or false
    //     speed: 500, // Integer: Speed of the transition, in milliseconds
    //     timeout: 4000, // Integer: Time between slide transitions, in milliseconds
    //     pager: false, // Boolean: Show pager, true or false
    //     nav: true, // Boolean: Show navigation, true or false
    //     random: false, // Boolean: Randomize the order of the slides, true or false
    //     pause: false, // Boolean: Pause on hover, true or false
    //     pauseControls: true, // Boolean: Pause when hovering controls, true or false
    //     prevText: "", // String: Text for the "previous" button
    //     nextText: "", // String: Text for the "next" button
    //     maxwidth: "", // Integer: Max-width of the slideshow, in pixels
    //     navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
    //     manualControls: "", // Selector: Declare custom pager navigation
    //     namespace: "rslides", // String: Change the default namespace used
    //     before: function () {}, // Function: Before callback
    //     after: function () {} // Function: After callback
    // });
    $('.flexslider').flexslider({
        slideshow: true,
        slideshowSpeed: 3000,
        animationLoop: true,
        controlNav: false,
        directionNav: false,
        touch: true,
        pauseOnAction: true,
        pauseOnHover: true,
    });
    $('.gallery__indicator--direction-left').on('click', function () {
        $('.flexslider').flexslider('prev');
        return false;
    })
    $('.gallery__indicator--direction-right').on('click', function () {
        $('.flexslider').flexslider('next');
        return false;
    })
});