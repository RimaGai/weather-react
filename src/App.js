import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Weather">
          <div className="Form">
            <form className="search-form">
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
                  <button className="current-location btn w-100">
                    Current
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="current">
            <h1>Oslo</h1>
            <ul>
              <li>Thursday</li>
              <li>Light rain</li>
            </ul>
          </div>
          <div className="row Weather">
            <div className="col-6">
              <img
                src="http://openweathermap.org/img/wn/09d@2x.png"
                className="icon"
                alt=""
                width="140"
              />
              <span className="temperature"> 12</span>
              <span className="units"> ºC</span>
            </div>
            <div className="col-6 conditions">
              <ul>
                <li>
                  Humidity:40 <span className="humidity"></span>%
                </li>
                <li>
                  Wind:2 <span className="wind"></span> m/s
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer>
        {" "}
        <a
          href="https://github.com/RimaGai/weather-react"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          Open source code
        </a>{" "}
        by Rima Gaileviciute
      </footer>
    </div>
  );
}
