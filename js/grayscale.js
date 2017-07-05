// PADRÃO DO TEMPLATE

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    $('[data-toggle="tooltip"]').tooltip()

    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true
    });

});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

$('.content-section:even').css('backgroundColor', 'black');

$("#copyright").append(new Date().getFullYear());

$.get('../eventos.json', function (data) {
    var eventos = JSON.parse(data);

    eventos.forEach(function (evento) {
        var linha = "<tr><td><a href=" + evento.link + " target='blank'>" + evento.nome + "</a></td><td>" + evento.endereco + "</td><td>" + evento.datahora + "</td></tr>";
        $("#eventos").append(linha);
    }, this);
    
}, 'text');