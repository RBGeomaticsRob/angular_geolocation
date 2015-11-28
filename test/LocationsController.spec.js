describe('LocationsController', function() {
  beforeEach(module('MissionCP'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('LocationsController');
  }));

  it('initialises with an empty list of locations', function() {
    expect(ctrl.locations).toBeUndefined();
  });
});