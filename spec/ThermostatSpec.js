// Unit Tests
//###########



describe('Thermostat', function() {
    var thermostat;

    beforeEach(function() {
      thermostat = new Thermostat();
    });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

//2. Increases the temperature with the up button

	it('increases in temperature with the up button', function(){
		thermostat.increaseTemperature();
		expect(thermostat.getCurrentTemperature()).toEqual(21);
	});

//3. Decreases the temperature with the down button

	it('increases in temperature with the down button', function(){
		thermostat.decreaseTemperature();
		expect(thermostat.getCurrentTemperature()).toEqual(19);
	});

//4. Thermostat has a minimum temperature is 10 degrees

  // it('has a minimum temperature of 10 degrees', function() {
  //   expect(thermostat.temperature).toEqual(20);
  // });

  it('has a minimum temperature of 10 degrees', function() {
    for(var i = 0; i < 10; i ++) {
      thermostat.decreaseTemperature();
    }
    expect(function(){
      thermostat.decreaseTemperature()}).toThrowError('You cannot go below 10 degrees');
  });

//4. If power saving mode is on, the maximum temperature is 25 degrees

  it('cannot go above 25 degrees when in power saving mode', function() {
    for(var i = 0; i < 5; i ++) {
      thermostat.increaseTemperature();
    }
    expect(function(){
      thermostat.increaseTemperature()}).toThrowError('You cannot go above 25 degrees');
  });

  it('cannot go above 32 degrees when NOT in power saving mode', function() {
    thermostat.changePowerSavingMode();
    for(var i = 0; i < 12; i ++) {
      thermostat.increaseTemperature();
    }
    expect(function(){
      thermostat.increaseTemperature()}).toThrowError('You cannot go above 32 degrees');
  });

  it('has powersaving mode on by default', function(){
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('you can reset the temperature to 20 with the reset button', function() {
    for(var i = 0; i < 3; i ++) {
      thermostat.increaseTemperature();
    }
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  it('has a yellow display if temperature is less than 25 and more than 18', function() {
    expect(thermostat.displayTemperature).toEqual('Yellow')
  });

  it('has a green display if temperature is less than 18', function() {
    for(var i = 0; i < 3; i ++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.displayTemperature).toEqual('Green')
  });

  it('has a red display if temperature is over 25', function() {
    thermostat.changePowerSavingMode();
    for(var i = 0; i < 8; i ++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.displayTemperature).toEqual('Red')
  });

});

