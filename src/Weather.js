import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9a867042f40ae2fdcbd042705b891b2&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  function searchLocation(position) {
    let apiKey = "b9a867042f40ae2fdcbd042705b891b2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }
  function currentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-6">
              <input
                type="search"
                className="form-control"
                placeholder="Enter city"
                autoComplete="off"
                onChange={changeCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
            <div className="col-3">
              <button
                className="current-location btn w-100"
                onClick={currentLocation}
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
