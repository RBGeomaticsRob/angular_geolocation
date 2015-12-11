app.controller('LocationsController',[function() {

  var self = this;

  self.site = 0;

  self.map = { center: { latitude: 51.23634, longitude: 1.39560 }, zoom: 8};

  this.selectSite = function(setSite) {
    self.site = setSite;
    self.setMap(setSite);
  };

  self.setMap = function(setSite){
    self.map = { center: { latitude: self.locations.items[setSite].latitude, longitude: self.locations.items[setSite].longitude }, zoom: 8};
  };

  self.siteCoords = function(setSite){
    return { latitude: self.locations.items[setSite].latitude, longitude: self.locations.items[setSite].longitude };
  };

  self.locations = {
    "items": [
      {
        "location": "0",
        latitude: 51.23634,
        longitude: 1.39560
      },
      {
        "location": "1",
        latitude: 50.23634,
        longitude: -1.39560
      }
    ]
  };

}]);
