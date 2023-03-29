jQuery(document).ready(function() {
    jQuery('ul li a').click(function() {
        jQuery('li a').removeClass("active");
        jQuery(this).addClass("active");
    });
});

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        dots: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
});