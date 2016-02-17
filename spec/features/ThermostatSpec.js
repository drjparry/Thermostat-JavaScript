describe("Thermostat features", function() {

  it('starts at 20 degrees', function() {
    var thermostat = new Thermostat();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

});