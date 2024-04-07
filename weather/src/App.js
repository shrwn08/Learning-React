import React, { useState } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  const fetchWeatherData = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const apiKey = 'e049bd75748e4fefb09172650242803';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      setWeatherData(data);
      setError(null);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error.message);
      } else if (error.request) {
        setError('An error occurred while fetching the data. Please try again.');
      } else {
        setError('An unknown error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <form onSubmit={fetchWeatherData}>
          <input
            type="text"
            placeholder="Enter a city name"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <WeatherDisplay weatherData={weatherData} error={error} />
    </div>
  );
}

export default App;
