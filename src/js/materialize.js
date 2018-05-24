import '.././styles/serwis.scss';

$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel({
        indicators: true,
        padding: 150,
    });
    $('.modal').modal();
});