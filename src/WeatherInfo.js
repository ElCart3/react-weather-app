import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="date-time">
        <FormattedDate date={props.data.date} />
      </div>
      <h1>{props.data.city}</h1>
      <div className="row middle">
        <div className="col d-flex weather-temperature align-items-center">
          <div className="col">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
        </div>
        <div className="col-4">
          <div className="details">
            <ul>
              <li>
                <strong className="description">few clouds</strong>
              </li>
              <li>Feels like: {Math.round(props.data.feel)}°C</li>
              <li>Wind speed: {Math.round(props.data.wind)} km/h</li>
              <li>Humidity: {Math.round(props.data.humidity)}%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
