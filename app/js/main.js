$(document).ready(function(){

//waypoints
if($(window).innerWidth()>650) {
  $('#aboutAnimImg').find('img').css('opacity', 0);
  var waypoint = new Waypoint({
    element: document.getElementById('aboutAnimImg'),
    handler: function() {
      $('#aboutAnimImg img:first-child').addClass('fadeIn');
      $('#aboutAnimImg img:last-child').addClass('fadeIn');
    },
    offset: '60%'
  })
}

// var linesWaypoint = new Waypoint({
//   element: document.getElementById('lines'),
//   handler: function() {
//     $('.lines').addClass('fadeIn');
//     $('.lines').css('opacity', 1);
//   },
//   offset: '80%'
// })

//products paralax
var lines = $('.lines');
$(window).on('scroll', function(){
  paralaxLines();
});
$(window).on('scroll');
paralaxLines();
function paralaxLines(){
  var scrollY = $(this).scrollTop();
  if( $(window).width()>768 ) {
    $('.lines').css({'transform': 'translateY('+ (0-(scrollY*0.0065)) + '%)'});
  } else {
    $('.lines').css({'transform': ''});
  }
}

//smooth scroll
$("body").on('click', '[href*="#"]', function(e){
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
  e.preventDefault();
});

//up arrow
$(window).scroll(function(){
  showUpArrow();
});

$('#upArrow').click(function(){
  $('html,body').stop().animate({ scrollTop: 0 }, 800);
});

function showUpArrow(){
  if($(window).scrollTop()>500) {
    $('#upArrow').addClass('bounceIn').removeClass('bounceOut').css('display', '');
  } else if ($('#upArrow').hasClass('bounceIn')) {
    $('#upArrow').removeClass('bounceIn').addClass('bounceOut');
    setTimeout(function(){
      $('#upArrow').css('display', 'none');
    }, 500)
  }
}


//Products cards height
$(window).resize(function(){
  setCardHeight();
});

setCardHeight();

function setCardHeight() {
  if($(window).innerWidth()>650) {
    $('.item-description').css('min-height', getCardHeight());
  } else {
    $('.item-description').css('min-height', '');
  }

};
function getCardHeight(){
  var elements = document.getElementsByClassName('item-description-wrapper');
  var length = elements.length;
  var maxHeight = 0;
  
  for(var i = 0; i<length; i++) {
    elemHeight = elements[i].offsetHeight
    if(maxHeight < elemHeight) {
      maxHeight = elemHeight;
    }
  }
  return maxHeight;
}

//Smoothslides
$('#header-slider').smoothSlides({
  effectDuration: 5000,
  navigation: false,
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

//owl brands
$('#brands-slider_id').owlCarousel({
  items: 4,
  loop: true,
  nav: true,
  dots: false,
  navText: ["",""],
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