$(function() {
    $('.center').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
        }
        }
    ]
    });
});