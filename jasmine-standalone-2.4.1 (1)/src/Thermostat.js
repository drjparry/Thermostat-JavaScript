'use strict';

//const minTemp = 10;

function Thermostat(){
	this.temperature = 20;
	this.minTemp = 10;
	this.maxTemp = 25;
	this.powerSavingMode = true;
};

Thermostat.prototype.getCurrentTemperature = function(){
	return this.temperature;
};

Thermostat.prototype.increaseTemperature = function() {
	if(this.temperature >= this.maxTemp) {
		throw new Error('You cannot go above '+ this.maxTemp + ' degrees')};
  this.temperature ++ ;  // += 1
};

Thermostat.prototype.decreaseTemperature = function() {
	if(this.temperature <= this.minTemp) {
		throw new Error('You cannot go below 10 degrees')};
	this.temperature --; // -= 1
};	

Thermostat.prototype.changePowerSavingMode = function() {
	if(this.maxTemp === 25) {
		this.powerSavingMode = false;
		return this.maxTemp = 32};
	this.powerSavingMode = true;	
	this.maxTemp = 25;
};



