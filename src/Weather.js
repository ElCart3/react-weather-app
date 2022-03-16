import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Search for a city..."
              autoComplete="off"
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
      <div className="date-time">Saturday, 17:13</div>
      <h1>Gloucester</h1>
      <div className="row middle">
        <div className="col d-flex weather-temperature align-items-center">
          <div className="col offset-1">
            <span className="current-temp">11</span>
            <span className="units">°C</span>
          </div>
          <div className="col">
            <img
              src="https://trusting-kowalevski-b80849.netlify.app/icons/degry.02d.png"
              alt="Few Clouds"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="details">
            <ul>
              <li>
                <strong className="description">few clouds</strong>
              </li>
              <li>Feels like: 9°C</li>
              <li>Wind speed: 6 km/h</li>
              <li>Humidity: 64%</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
