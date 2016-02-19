$(document).ready(function(){
  var thermostat = new Thermostat();
  updating();

  $("#increaseTemperature").on("click", function(){
    thermostat.increaseTemperature();
    updating();
  })

  $("#temperature-down").on("click", function(){
    thermostat.decreaseTemperature();
    updating();
  })

  $("#temperature-reset").on("click", function(){
    thermostat.resetTemperature();
    updating();
  })

  $("#toggle-power-saving").on("click", function(){
    thermostat.changePowerSavingMode();
    $("#power-saving-status").text("On")
    updating();

  })


  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp)
    })
  })


  function updating(){
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr("class", thermostat.changeDisplayTemperature());
  };

});