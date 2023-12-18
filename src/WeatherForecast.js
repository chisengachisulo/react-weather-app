import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "ff3237836o6410aacb2481a69ct9c917";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div>
            <span className="weatherForecast-temperature-max">19°</span>
            <span className="weatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
