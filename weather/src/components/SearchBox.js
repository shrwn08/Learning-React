import React from 'react';

const SearchBox = ({ handleChange, getForecast, city, loading, error }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getForecast();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      getForecast();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <br />
      <input
        name="Enter Location"
        placeholder="Enter Location"
        type="text"
        value={city}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="input-field"
        required
      />
      <button type="submit" disabled={loading}>
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching data</p>}
    </form>
  );
};

export default SearchBox;
