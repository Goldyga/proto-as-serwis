$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.mobile__link').click((e) => {
        $('.sidenav').sidenav('close');
    });
    $('.carousel').carousel({
        indicators: true,
    });
    // function autoplay() {
    //     $('.carousel').carousel('next');
    //     setTimeout(autoplay, 5000);
    // }
    // autoplay()
    $('.gallery__carousel--item img').click((e)=> {
        const itemImg = e.currentTarget.currentSrc;
        $('.gallery__carousel--modal').css('background-image', 'url("' + itemImg + '")')
    })
     $('.gallery__indicator--next').click((e) => {
         e.preventDefault();
         e.stopPropagation();
         $('.carousel').carousel('next');
     });
     $('.gallery__indicator--prev').click((e) => {
         e.preventDefault();
         e.stopPropagation();
         $('.carousel').carousel('prev');
     });

     $('.modal').modal();
});