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
})

});