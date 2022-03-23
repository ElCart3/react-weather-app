import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
