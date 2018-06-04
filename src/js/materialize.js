$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.mobile__link').click((e) => {
        $('.sidenav').sidenav('close');
    });
    $('.carousel').carousel({
        indicators: true,
        padding: 200,
    });
    // function autoplay() {
    //     $('.carousel').carousel('next');
    //     setTimeout(autoplay, 5000);
    // }
    // autoplay()
    $('.gallery__slides--image img').click((e) => {
        const itemImg = e.currentTarget.currentSrc;
        $('.gallery__carousel--modal').css('background-image', 'url("' + itemImg + '")')
    })
     $('.modal').modal();
});