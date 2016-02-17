function Thermostat(){
  this.temperature = 20
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature
};

Thermostat.prototype.turnUp = function(raiseTemperature) {
  this.temperature += raiseTemperature;
};