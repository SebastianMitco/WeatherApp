var API_KEY = "API-Code";

var getWeather = function (event) {
  var city = document.querySelector("#weather").value;
  if (city.length > 2) {
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    requestUrl += city + "&appid=" + API_KEY + "&units=metric";

    fetch(requestUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (result) {
        console.log("weather in ", result.name);
        var temp = Math.ceil(result.main.temp);
        var text = "Weather in " + city + " is " + temp + " degrees.";
        document.querySelector("#result").innerText = text;
      });
  }
};

document.querySelector("#search").addEventListener("click", getWeather);
