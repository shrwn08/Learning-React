import React from 'react';

const WeatherDisplay = ({ weatherData, error }) => {
  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!weatherData) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="weather-display">
      <h2>Weather in {weatherData.location.name}, {weatherData.location.country}</h2>
      <div className="temperature">{weatherData.current.temp_c}°C</div>
      <div className="condition">{weatherData.current.condition.text}</div>
      <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
    </div>
  );
};

export default WeatherDisplay;
