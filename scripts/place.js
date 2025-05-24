// Select DOM elements
const currentYearEl = document.querySelector("#currentyear");
const lastModifiedEl = document.querySelector("#last-Modified");
const temperature = document.querySelector("#temperature");
const conditions = document.querySelector("#conditions");
const wind = document.querySelector("#wind");
const windChill = document.querySelector("#windchill");

// Set current year
if (currentYearEl) {
  const today = new Date();
  currentYearEl.textContent = today.getFullYear();
}

// Set last modified date with time and time zone
if (lastModifiedEl) {
  const lastmod = new Date(document.lastModified);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };
  lastModifiedEl.textContent = `Last modification: ${lastmod.toLocaleString(undefined, options)}`;
}

// Sample weather values (replace with live API data later)
let temperatureValue = 10; // degrees Celsius
let conditionsValue = "Cloudy";
let windValue = 30; // km/h

// One-liner function to calculate wind chill
const calculateWindChill = (t, w) => `${(13.12 + 0.6215 * t - 11.37 * Math.pow(w / 3.6, 0.16) + 0.3965 * t * Math.pow(w / 3.6, 0.16)).toFixed(1)} °C`;

// Only call the function if the conditions are met
let windChillValue = (temperatureValue <= 10 && windValue > 4.8)
  ? calculateWindChill(temperatureValue, windValue)
  : "N/A";

// Update the DOM
if (temperature) temperature.textContent = `${temperatureValue} °C`;
if (conditions) conditions.textContent = conditionsValue;
if (wind) wind.textContent = `${windValue} km/h`;
if (windChill) windChill.textContent = windChillValue;
