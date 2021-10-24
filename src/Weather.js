import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: "Thursday",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row mb-3">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter city"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
            <div className="col-3">
              <button className="current-location btn w-100">Current</button>
            </div>
          </div>
        </form>
        <div className="current">
          <h1>{weather.city}</h1>
          <ul>
            <li>{weather.date}</li>
            <li className="text-capitalize">{weather.description}</li>
          </ul>
        </div>
        <div className="row Weather">
          <div className="col-6">
            <img
              src={weather.iconUrl}
              className="icon"
              alt={weather.description}
              width="140"
            />
            <span className="temperature">
              {" "}
              {Math.round(weather.temperature)}
            </span>
            <span className="units"> ºC</span>
          </div>
          <div className="col-6 conditions">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {Math.round(weather.wind)}m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=b9a867042f40ae2fdcbd042705b891b2&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
