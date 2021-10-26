import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="current">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            {" "}
            <FormatDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row Weather">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />
          <Temperature celsius={props.data.temperature} />
        </div>
        <div className="col-6 conditions">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
