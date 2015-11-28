describe('LocationsController', function() {
  beforeEach(module('MissionCP'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('LocationsController');
  }));

  it('initialises with an empty list of locations', function() {
    expect(ctrl.locations).toBeUndefined();
  });

  describe('when looking for locations', function() {
    var items = [
      {
        "location": "1",
        "Lat": "51.23634",
        "Long": "1.39560"
      },
      {
        "location": "2",
        "Lat": "51.24634",
        "Long": "1.40560"
      }
    ];

    it('displays locations', function() {
      expect(ctrl.locations.items).toEqual(items);
    });
  });
});

