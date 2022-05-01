$(function () {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    centerMode: true,
    centerPadding: '0',
  });
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '.ti-angle-left',
    nextArrow: '.ti-angle-right',
    dots: true,
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