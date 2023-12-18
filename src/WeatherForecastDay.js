import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) { 
  function maxTemperature(){ 
    let temperature =Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function day(){ 
    let date = new Date(props.data.time * 1000);
    let day = date.getDay(); 

    let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="weatherForecast-day">{day()}</div>
      <WeatherIcon code="09d" size={36} />
      <div>
        <span className="weatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
