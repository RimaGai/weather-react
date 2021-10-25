import React from "react";
import FormatDate from "./FormatDate";
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
          <img
            src={props.data.iconUrl}
            className="icon"
            alt={props.data.description}
            width="140"
          />
          <span className="temperature">
            {" "}
            {Math.round(props.data.temperature)}
          </span>
          <span className="units"> ºC</span>
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
