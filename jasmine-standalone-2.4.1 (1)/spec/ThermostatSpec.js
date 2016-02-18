// Unit Tests
//###########

'use strict';

//1. Thermostat starts at 20 degrees

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

  
});

