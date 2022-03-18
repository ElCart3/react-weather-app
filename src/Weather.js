import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      feel: response.data.main.feels_like,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      loaded: true,
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Search for a city..."
                className="form-search search"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="form-submit button"
              />
            </div>
            <div className="col-2">
              <button className="form-submit button">Current</button>
            </div>
          </div>
        </form>
        <div className="date-time">
          <FormattedDate date={weatherData.date} />
        </div>
        <h1>{weatherData.city}</h1>
        <div className="row middle">
          <div className="col d-flex weather-temperature align-items-center">
            <div className="col offset-1">
              <span className="current-temp">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">°C</span>
            </div>
            <div className="col">
              <img src={weatherData.icon} alt={weatherData.description} />
            </div>
          </div>
          <div className="col-4">
            <div className="details">
              <ul>
                <li>
                  <strong className="description">few clouds</strong>
                </li>
                <li>Feels like: {Math.round(weatherData.feel)}°C</li>
                <li>Wind speed: {Math.round(weatherData.wind)} km/h</li>
                <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "e522002b9b5581b2e68846554df3dfbc";
    let city = "Gloucester";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
