import React from 'react';

const WeatherError = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <div className="alert alert-danger" role="alert">
      Error: {error}
    </div>
  );
};

export default WeatherError;