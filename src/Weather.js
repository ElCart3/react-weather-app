import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input type="search" placeholder="Search for a city..." />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" />
          </div>
          <div className="col-2">
            <button>Current</button>
          </div>
        </div>
      </form>
      <div>Saturday, 17:13</div>
      <h1>Gloucester</h1>
      <div className="row">
        <div className="col">11°C</div>
        <div className="col">
          <img
            src="https://trusting-kowalevski-b80849.netlify.app/icons/degry.02d.png"
            alt="Few Clouds"
          />
        </div>
        <div className="col-4">
          <ul>
            <li>
              <strong>few clouds</strong>
            </li>
            <li>Feels like: 9°C</li>
            <li>Wind speed: 6 km/h</li>
            <li>Humidity: 64%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
