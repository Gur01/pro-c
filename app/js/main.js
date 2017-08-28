$(document).ready(function(){

$('#header-slider').smoothSlides({
  effectDuration: 5000,
  navigation: false,
  autoPlay: false,
  captions: false
});

//hamburger menu
$('#hamburger-menu').on('click', function() {
  $('.bar').toggleClass('animate');
  $('#header-nav').toggleClass('show-mobile-menu');
})

$(window).resize(function(event) {
  if($(window).width()>960) {
    $('#header-nav').removeClass('show-mobile-menu'); 
    $('.bar').removeClass('animate');
  }
});

//sub menu
var navLi = $('nav ul li'),
    navSub = navLi.find('ul');
navSub.siblings('a').click(function(e){
  e.preventDefault();
    $(this).toggleClass('active').siblings('ul')
      .toggleClass('active').slideToggle(300);
})

//owl brands
$('#brands-slider_id').owlCarousel({
  items: 4,
  loop: true,
  nav: true,
  dots: false,
  navText: ["<img src='../img/svg/down-arrow.svg'>","<img src='../img/svg/down-arrow.svg'>"],
  responsive: {
    0: {
      items: 1
    },
    550: {
      items: 2
    },
    768: {
      items: 3
    },
    960: {
      items: 4
    }
  }
});

$('#selector_id').click(function(){
  $(this).toggleClass('active-selector');
})

});