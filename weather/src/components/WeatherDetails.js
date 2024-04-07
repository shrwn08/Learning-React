import React from 'react';

const WeatherDetails = ({ weatherData }) => {
  const { location, current } = weatherData;

  return (
    <div className="weather-details">
      <div className="location-temp">
        <h2>{location.name}, {location.country}</h2>
        <p>
          {current.temp_c}°C - {current.temp_f}°F
        </p>
      </div>

      <div className="condition-details">
        <div className="condition-icon">
          <img
            src={current.condition.icon}
            alt={current.condition.text}
          />
        </div>

        <div className="condition-text">
          <p>{current.condition.text}</p>
        </div>

        <ul>
          <li>
            <span>Feels Like:</span>
            {current.feelslike_c}°C
          </li>
          <li>
            <span>Wind:</span>
            {current.wind_kph} km/h
          </li>
          <li>
            <span>Humidity:</span>
            {current.humidity}%
          </li>
          <li>
            <span>Cloud Cover:</span>
            {current.cloud}%
          </li>
          <li>
            <span>Updated:</span>
            {current.last_updated}
          </li>
          <li>
            <span>Country:</span>
            {location.country}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherDetails;
