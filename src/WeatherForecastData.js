import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastData(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="WeatherForecastData">
      <div className="ForecastDay">{day()}</div>

      <WeatherIcon code={props.data.weather[0].icon} />
      <div className="ForecastTemperature">
        <span classname="TemperatureMax">
          {Math.round(props.data.temp.max)}º/{" "}
        </span>
        <span classname="TemperatureMin">
          {Math.round(props.data.temp.min)}º
        </span>
      </div>
    </div>
  );
}
