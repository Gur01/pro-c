$(document).ready(function(){

//waypoints
// var waypoint = new Waypoint({
//   element: document.getElementById('production_id'),
//   handler: function(direction) {
//     console.log(direction);
//     //notify('Direction: ' + direction)
//   }
// })

//Products cards height
$(window).scroll(function(){
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