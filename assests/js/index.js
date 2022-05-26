$(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        responsive: [{
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
    $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '.ti-angle-left',
        nextArrow: '.ti-angle-right',
        dots: true,
        focusOnSelect: true
    });
    $('.center').slick({
        prevArrow: '.ti-angle-left',
        nextArrow: '.ti-angle-right',
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        focusOnSelect: true,
        responsive: [{
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

    // slider
    $('.single-item-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '.slider-previous',
        nextArrow: '.slider-next',
        dots: false,
        focusOnSelect: true,
    });

    // matches/tickets
    $('.variable-width-matches').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        initialSlide: 3,
        prevArrow: '.matches-previous',
        nextArrow: '.matches-next',
        responsive: [{
            breakpoint: 1100,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 739,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
        ]
    });
});

$(function () {
    $('.multiple-items-moments').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1100,
            settings: {
                arrows: false,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 2000,
                centerPadding: '0',
                slidesToShow: 3

            }
        }, {
            breakpoint: 1023,
            settings: {
                arrows: false,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 3000,
                centerPadding: '0',
                slidesToShow: 2

            }
        },
        {
            breakpoint: 739,
            settings: {
                arrows: false,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 3000,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
        ]

    });

});

$(document).ready(function () {
    $('#loginModal').modal('');
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});


function openSearch() {
    document.getElementById("search-display").style.display = "block";
}

function closeSearch() {
    document.getElementById("search-display").style.display = "none";
}