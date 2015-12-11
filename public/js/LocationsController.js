app.controller('LocationsController',[function() {

  var self = this;

  self.site = 0;

  self.map = { center: { latitude: 51.23634, longitude: 1.39560 }, zoom: 8};

  this.selectSite = function(setSite) {
    self.site = setSite;
    self.setMap(setSite);
  };

  self.setMap = function(setSite){
    self.map = { center: { latitude: self.locations.items[setSite].coords.latitude, longitude: self.locations.items[setSite].coords.longitude }, zoom: 8};
  };

  self.locations = {
    "items": [
      {
        "location": "0",
        coords: {
          latitude: 51.23634,
          longitude: 1.39560
        }
      },
      {
        "location": "1",
        coords: {
          latitude: 50.23634,
          longitude: 1.39560
        }
      }
    ]
  };

}]);
