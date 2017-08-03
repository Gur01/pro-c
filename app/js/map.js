//google maps
function initMap() {
  var location = {lat: 55.673711, lng: 37.440607};
  var options = {
    zoom: 15,
    center: location,
    disableDefaultUI: true,
    scrollwheel: false
  }
  var map = new google.maps.Map(document.getElementById('map'), options)
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: '../img/svg/marker.svg'
  });
}