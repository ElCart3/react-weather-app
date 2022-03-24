import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "e522002b9b5581b2e68846554df3dfbc";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">16°</span>
            <span className="WeatherForecast-temperature-min">6°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
