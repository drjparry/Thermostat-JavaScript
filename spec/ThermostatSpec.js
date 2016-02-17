describe("Thermostat", function() {

  it('starts at 20 degrees', function() {
    var thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
  });

  it('gets the current temperature', function() {
    var thermostat = new Thermostat();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

});