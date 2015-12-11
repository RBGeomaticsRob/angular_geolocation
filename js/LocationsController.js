app.controller('LocationsController',[function() {

  var self = this;

  self.site = 0;

  self.map = { center: { latitude: 51.23634, longitude: 1.39560 }, zoom: 8};

  this.selectSite = function(setSite) {
    self.site = setSite;
    self.setMap(setSite);
  };

  self.setMap = function(setSite){
    self.map = self.locations.items[setSite].map;
  };

  self.locations = {
    "items": [
      {
        "location": "0",
        "map": {
          center: {
              latitude: 51.23634,
              longitude: 1.39560
            },
          zoom: 8
        }
      },
      {
        "location": "1",
        "map": {
          center: {
              latitude: 50.23634,
              longitude: -1.39560
            },
          zoom: 8
        }
      }
    ]
  };


}]);
