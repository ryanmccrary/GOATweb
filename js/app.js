$(document).ready(function() {

  var mySwiper = $('.swiper-container').swiper({
    // autoplay: 6000,
    autoplayDisableOnInteraction: false,
    speed: 750,
    mode:'horizontal',
    loop: true
  });


  $('.box h4 span').fitText(1);
  $(".number").fitText(.2);
  $('.fittext').fitText(1.4, { maxFontSize: '40px'});

  $('.slide-1').backstretch('../img/slide-1.jpg');
  $('.box.tribe').backstretch('../img/home-tribe.jpg');
  $('.box.blog').backstretch('../img/home-blog.jpg');
});