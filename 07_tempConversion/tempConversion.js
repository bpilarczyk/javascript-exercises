const convertToCelsius = function(tempInFahrenheit) {
  let tempInCelsius = parseFloat((((tempInFahrenheit - 32) * 5)/9).toFixed(1));
  
  return tempInCelsius;
};

const convertToFahrenheit = function(tempInCelsius) {
  let tempInFahrenheit = parseFloat(((9*tempInCelsius)/5 + 32).toFixed(1));

  return tempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
