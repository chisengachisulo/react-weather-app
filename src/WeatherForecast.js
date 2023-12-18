import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          Thu icon <WeatherIcon />
          19 10
        </div>
      </div>
    </div>
  );
}
