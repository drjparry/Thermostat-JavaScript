describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('gets the current temperature', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('raises current temperature', function() {
    thermostat.turnUp(5);
    expect(thermostat.temperature).toEqual(25);
  });
});