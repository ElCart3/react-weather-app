import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
        <WeatherInfo data={weatherData} />
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
