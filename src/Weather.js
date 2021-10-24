import React from "react";
import "./Weather.css";
export default function Weather() {
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
            <li>Humidity: 40%</li>
            <li>Wind: 2m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
