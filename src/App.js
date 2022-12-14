import React, { useState } from "react"
import './App.css';


function App() {
  const apiKey = "6b42ac7df85a4e3c6a182a15d6784e03"
  const [weatherData, setWeatherData] = useState([{}]);
  const [cityName, setCityName] = useState();
  const [cityTemp, setCityTemp] = useState();
  const [cityWeather, setCityWeather] = useState();
  const [city, setCity] = useState("")

  const getWeather = async (event) => {
    if (event.key === "Enter") {
      const fetchPromise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&units=metric&appid=${apiKey}`)
      const cityWeatherData = await fetchPromise.json();
      setCityName(cityWeatherData.name)
      setCityTemp(cityWeatherData.main.temp)
      setCityWeather(cityWeatherData?.weather[0].main)
      setWeatherData(cityWeatherData)
      setCity("")
    }
  }

  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter City.."
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

<p className="welcome">Welcome to weather app! Enter in a city to get the weather</p>

      <div className="data">
        {cityName && <div className="phrase">{cityName}</div>}
        {cityTemp && <div className="phrase">{Math.round(cityTemp)}˚F</div>}
        {cityWeather && <div className="phrase">{cityWeather}</div>}
      </div>
    </div>
  );
}

export default App;
