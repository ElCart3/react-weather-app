import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "/images/degry.01d.png",
    "01n": "/images/degry.01n.png",
    "02d": "/images/degry.02d.png",
    "02n": "/images/degry.02n.png",
    "03d": "/images/degry.03.png",
    "03n": "/images/degry.03.png",
    "04d": "/images/degry.03.png",
    "04n": "/images/degry.03.png",
    "09d": "/images/degry.10.png",
    "09n": "/images/degry.10.png",
    "10d": "/images/degry.10.png",
    "10n": "/images/degry.10.png",
    "11d": "/images/degry.11.png",
    "11n": "/images/degry.11.png",
    "13d": "/images/degry.13.png",
    "13n": "/images/degry.13.png",
    "50d": "/images/degry.50.png",
  };
  return (
    <div className="WeatherIcon">
      <img src={codeMapping[props.code]} alt={props.alt} />
    </div>
  );
}
