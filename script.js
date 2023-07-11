function convertCelsiusToFahrenheit() {
  var celsiusInput = document.getElementById('celsius');
  var fahrenheitInput = document.getElementById('fahrenheit');
  var resultElement = document.getElementById('result');

  if (celsiusInput.value !== '') {
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = celsius * 9 / 5 + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    resultElement.innerText = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
  }
}

function convertFahrenheitToCelsius() {
  var celsiusInput = document.getElementById('celsius');
  var fahrenheitInput = document.getElementById('fahrenheit');
  var resultElement = document.getElementById('result');

  if (fahrenheitInput.value !== '') {
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    celsiusInput.value = celsius.toFixed(2);
    resultElement.innerText = fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
  }
}
