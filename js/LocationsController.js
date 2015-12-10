app.controller('LocationsController',[function() {

  var self = this;

  self.map = { center: { latitude: 51.23634, longitude: 1.39560 }, zoom: 8};

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
