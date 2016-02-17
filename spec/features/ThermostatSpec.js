describe("Thermostat features", function() {

  it('starts at 20 degrees', function() {
    var thermostat = new Thermostat();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('User can increase the temperature', function() {
    var thermostat = new Thermostat();
    thermostat.turnUp(5);
    expect(thermostat.temperature).toEqual(25);
  });
});
