thermostat = new Thermostat();


updateTemperature = function() {
  $('.currentTemp').html(thermostat.temp);
  $('.currentTemp').css('color', thermostat.displayColour);
};

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk', function(data) {
 $('#weather-in-london').html(Math.round((data.main.temp)-273.15));
});

// http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY}

  updateTemperature();


$('#increaseTemp').click(function() {
  thermostat.increaseTemperature();
  updateTemperature();
});

$('#decreaseTemp').click(function() {
  thermostat.decreaseTemperature();
  updateTemperature();
});

$('#resetTemp').click(function() {
  thermostat.resetTemperature();
  updateTemperature();
});

$('#powerSave').change(function() {
  thermostat.setPowerSave();
  updateTemperature();
});

