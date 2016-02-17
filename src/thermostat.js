function Thermostat(){
  this.temperature = 20
  this.powerSavingMode = false;
  MINTEMPERATURE = 10
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature
};

Thermostat.prototype.turnUp = function(raiseTemperature) {
  this.temperature += raiseTemperature;
};

Thermostat.prototype.turnDown = function(decreaseTemperature) {
  if(this.temperature <= MINTEMPERATURE)
    {throw new Error('Temperature cannot be below 10 degrees')};
  this.temperature -= decreaseTemperature;
};

Thermostat.prototype.ispowerSavingMode = function() {
  if(this.powerSavingMode === false){
    return this.powerSavingMode = true;}
  else {
    return this.powerSavingMode = false;}
};
