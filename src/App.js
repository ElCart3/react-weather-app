import React from "react";
import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <div className="weather-app">
            <Weather defaultCity="Gloucester" />
          </div>
        </div>
        <footer>
          <small>
            This project is coded by Ellie Carter and is{" "}
            <a
              href="https://github.com/ElCart3/react-weather-app"
              target="_blank"
              rel="noreferrer noopener"
            >
              open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
