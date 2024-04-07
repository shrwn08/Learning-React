import React, { useState } from 'react';
import SearchBox from './SearchBox';
import axios from 'axios';

const Forecast = () => {
  const [city, setCity] = useState('');
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_KEY = "e049bd75748e4fefb09172650242803";

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getForecast = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      setForecast(response.data);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBox
        handleChange={handleChange}
        getForecast={getForecast}
        city={city}
        loading={loading}
        error={error}
      />
      {/* Display forecast data here if needed */}
      {forecast && (
        <div>
          <h2>{forecast.location.name}</h2>
          <p>Temperature: {forecast.current.temp_c}°C</p>
          <p>Condition: {forecast.current.condition.text}</p>
          {/* You can display other data from the forecast object as needed */}
        </div>
      )}
    </div>
  );
};

export default Forecast;
