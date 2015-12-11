app.controller('TreasureController',[function() {
  var self = this;

  self.accuracy = "?";

  self.marker = {
    id: 1,
    coords: {
      latitude: 51.234,
      longitude: 1.112
    }
  };

  self.setMarker = function(position){
    self.marker = {
      id: 99,
      coords: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
        }
    };
    console.log(self.marker);
  };

  self.setAccuracy = function(position){
    self.accuracy = position.coords.accuracy;
  };

  navigator.geolocation.watchPosition(function(position){
    self.setMarker(position);
    self.setAccuracy(position);
  },
    function(error){console.log(error.code);},
    {timeout:10000, enableHighAccuracy: true, maximumAge: 0});


}]);
