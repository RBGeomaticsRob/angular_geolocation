app.controller('TreasureController',[function() {
  var self = this;

  self.marker = {
    id: 99,
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

  navigator.geolocation.watchPosition(function(position){
    self.setMarker(position);
  },
  function(error){console.log(error.code);},
  {timeout:10000});
  // $scope.$watch('myPosition.coords', function(newValue,oldValue){
  //   console.log(newValue);
  //   self.marker = {
  //     id: 0,
  //     coords: {
  //       latitude: newValue.latitude,
  //       longitude: newValue.longitude
  //     }
  //   };
  // }, true);

  // self.myCoords = $geolocation.position.coords;
  //
  // self.myError = $geolocation.position.error;
  //
  // console.log(self.myCoords);
  // console.log(self.myError);


}]);
