
$(document).ready(function () {
    onWindowResized();
    initSlider();
    initAbout();
    initHotelClickListener();
    window.addEventListener('resize', onWindowResized);
});

function calculateBannerSize() {
    var h = $(window).height();
    var w = $(window).width();
    if (w > 992) {
        var newHeight = h - $('#menu').height();
        console.log('height', newHeight);
        $('#banner').height(newHeight);
        $('.carousel.carousel-slider').height(newHeight);
        $('.carousel-image').height(newHeight);
        $('.carousel-item').height(newHeight);
    }
}

function initSlider() {
    // $(".owl-carousel").owlCarousel({
    //     items: 1,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 3000,
    //     animateOut: 'fadeOut'
    // });
    //$('.carousel.carousel-slider').carousel({ fullWidth: true });
    //startAutoplay(3000);
}

function initFixedMenu() {
    $(".button-collapse").sideNav();
    $('#navbar').pushpin({
        top: $('#banner1').height()
    });
}

function initAbout() {
    $('.parallax').parallax();
}

function initHotelClickListener() {
    $('.modal').modal();
}


function startAutoplay($carousel) {
    autoplay_id = setInterval(function () {
        $('.carousel').carousel('next');
    }, 3000); // every x seconds
    //console.log("starting autoplay");
}

function stopAutoplay(autoplay_id) {
    if (autoplay_id) {
        clearInterval(autoplay_id);
        //console.log("stoping autoplay");
    }
}

function onWindowResized() {
    calculateBannerSize();
    initFixedMenu();
}

