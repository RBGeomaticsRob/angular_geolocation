app.controller('GeoController',['$geolocation', function($geolocation){
  $geolocation.watchPosition({
    timeout: 60000,
    maximumAge: 250,
    enableHighAccuracy: true
  });
}]);
