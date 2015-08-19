thermostat = new Thermostat();

updateTemperature = function() {
  $('.currentTemp').html(thermostat.temp);
  $('.currentTemp').css('color', thermostat.displayColour);
};

var city = $('#desired-city').val();

$('#confirm-city-button').click(function() {
  var city = $('#desired-city').val();
  $.getJSON(('http://api.openweathermap.org/data/2.5/weather?q=' + city ), function(data) {
    $('#weather-in-london').html(Math.round((data.main.temp)-273.15));
  });
});

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
