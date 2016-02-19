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

function displayWeather(city){

  var url = "http://api.openweathermap.org/data/2.5/weather?q="+ city;
  var token = "&APPID=95267b62b378c4bba548c96fc6528080";
  var units = "&units=metric";
  $.get(url + token + units, function(data){
    $("#local_temperature").text(data.main.temp);
    })
   };

 $("#city").change(function(){
  var city = $("#city").val();
  console.log(city);
  displayWeather(city);
 })

//  $('#select-city').submit(function(event) {
//   event.preventDefault();
//   var city = $('#current-city').val();
//   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
//     $('#current-temperature').text(data.main.temp);
//   })
// })












  function updating(){
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr("class", thermostat.changeDisplayTemperature());
  };

});