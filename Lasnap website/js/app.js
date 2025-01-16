// NAvbar Toggle js
console.log('Script loaded');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  console.log('Hamburger clicked');
  navLinks.classList.toggle('active');
});
$(document).ready(function () {
  $(".carousel_1").owlCarousel({
    nav: false,
    loop: true,
    dots:false,
    margin:10,
    mouseDrag: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      767: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  $(".carousel_2").owlCarousel({
    nav: true,
    margin:10,
    dots: false,
    loop: true,
    mouseDrag: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  });
});

// go Top 
$(function(){

  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    total = $(window).scrollTop() + $(window).height();
    diff = $(document).height() - 20;
    if($(window).scrollTop() + $(window).height() >= $(document).height() - 20) {
        $('.go-top').css("bottom", total - diff+'px');
        $('.enquiry-mobile').css("bottom", total - diff+'px');
        $('.brochure-mobile').css("bottom", total - diff+'px');
    }else{
        $('.go-top').css("bottom", "12px");
        $('.enquiry-mobile').css("bottom", "12px");
        $('.brochure-mobile').css("bottom", "12px");
    }
    if (scrolled > 200) $('.go-top').fadeIn('slow');
    if (scrolled < 200) $('.go-top').fadeOut('slow');
  });
  
  //Click event
  $('.go-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  2000);
  });

});



