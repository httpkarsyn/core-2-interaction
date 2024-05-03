// Rendering countdown timer
(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    // January 1st, 2030
    const countDown = new Date("January 1, 2030 00:00:00").getTime();

    const x = setInterval(function () {
        const now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)).toLocaleString();
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    }, 0);
})();

// Fetching and rendering data from APIs


var URL_1 = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=35.3733&longitude=-119.0187&hourly=dust&forecast_days=1`;
var URL_2 = `https://api.open-meteo.com/v1/forecast?latitude=-41.2866&longitude=174.7756&hourly=wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&forecast_days=1`;
var URL_4 = `https://api.open-meteo.com/v1/forecast?latitude=16.4333&longitude=-93.7953&hourly=temperature_2m&temperature_unit=fahrenheit&forecast_days=1`;
var URL_5 = `https://api.open-meteo.com/v1/forecast?latitude=80.216&longitude=-76.1238&hourly=snowfall&temperature_unit=fahrenheit&forecast_days=1`;
var URL_6 = `https://api.open-meteo.com/v1/forecast?latitude=25.2973&longitude=91.5827&hourly=rain&temperature_unit=fahrenheit&wind_speed_unit=mph&forecast_days=1`

fetch(URL_1)
    .then((response) => response.json())
    .then((data) => renderDust(data));

fetch(URL_2)
    .then((response) => response.json())
    .then((data) => renderWindSpeed(data));

fetch(URL_4)
    .then((response) => response.json())
    .then((data) => renderTemperature(data));

fetch(URL_5)
    .then((response) => response.json())
    .then((data) => renderSnowfall(data));

fetch(URL_6)
    .then((response) => response.json())
    .then((data) => renderRain(data));



    function renderDust(data) {
        console.log(data);
        var dateObject = new Date();
        var hour = dateObject.getHours();
        var dustElement = document.querySelector('.api-overlay[data-property="dust"]');
        var dustValue = data.hourly.dust[hour];
        dustElement.innerHTML = dustValue + "&nbsp; MG/M3";
        let adjustedValue = (dustValue - 37) * 0.568;
        let finalResult = 100 - adjustedValue;
        let finalResultPercentage = finalResult + "%";
    }
    

function renderWindSpeed(data) {
    console.log(data);
    var dateObject = new Date();
    var hour = dateObject.getHours();
    var windSpeedElement = document.querySelector('.api-overlay[data-property="wind-speed"]');
    windSpeedElement.innerHTML = data.hourly.wind_speed_10m[hour] + "&nbsp;MPH";
}

function renderTemperature(data) {
    console.log(data);
    var dateObject = new Date();
    var hour = dateObject.getHours();
    var temperatureElement = document.querySelector('.api-overlay[data-property="temperature"]');
    temperatureElement.innerHTML = data.hourly.temperature_2m[hour] + "&nbsp;F";
}

function renderSnowfall(data) {
    console.log(data);
    var dateObject = new Date();
    var hour = dateObject.getHours();
    var snowfallElement = document.querySelector('.api-overlay[data-property="snowfall"]');
    snowfallElement.innerHTML = data.hourly.snowfall[hour] + "&nbsp;IN";
}

function renderRain(data) {
      console.log(data);
      var dateObject = new Date();
      var hour = dateObject.getHours();
      var rainElement = document.querySelector('.api-overlay[data-property="rain"]');
      rainElement.innerHTML = data.hourly.rain [hour] + "&nbsp;IN";
  }

