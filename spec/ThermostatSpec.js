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

  it('decreases current temperature', function(){
    thermostat.turnDown(5);
    expect(thermostat.temperature).toEqual(15);
  });

  it('Temperature cannot be decreased below 10', function() {
    thermostat.turnDown(10);
    expect(function() { thermostat.turnDown(1)}).toThrowError('Temperature cannot be below 10 degrees');
  });

  it('Power saving mode can be turned on', function() {
    thermostat.powerSavingMode;
    expect(thermostat.ispowerSavingMode()).toBe(true);
  });


});