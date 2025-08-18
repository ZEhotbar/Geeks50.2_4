import { useState } from "react";

function App() {
  // заранее подготовленные данные
  const weatherData = {
    London: { temp: 15, description: "Cloudy", icon: "☁" },
    Paris: { temp: 18, description: "Sunny", icon: "☀" },
    Tokyo: { temp: 22, description: "Rainy", icon: "🌧" },
    Toronto: { temp: 10, description: "Snowy", icon: "❄" }
  };

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  
  const handleSearch = () => {
    if (weatherData[city]) {
      setWeather(weatherData[city]);
      setError("");
    } else {
      setWeather(null);
      setError("City not found!");
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Weather App</h1>

      <input
        type="text" placeholder="Enter city..." value={city} onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <span style={{ fontSize: "40px" }}>{weather.icon}</span>
          <h2>{weather.temp}°C</h2>
          <p>{weather.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
