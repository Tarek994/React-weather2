import React,{useState} from "react"
import './App.css';


function App() {

  const apiKey = "6b42ac7df85a4e3c6a182a15d6784e03"
  const {weatherData , setWeatherData} = useState([{}]);
  const [city, setCity ] = useState("")

  const getWeather = (event) => {
    if(event.key === "Enter"){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&units=metric&appid=${apiKey}`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data);
          setCity("")
        }
      )
    }
  }

  return (
    <div className="container">
      <input
      className="input"
      placeholder="Enter Cite.."
      onChange={e => setCity(e.target.value)}
      value={city}
      onKeyPress={getWeather}
      />

{typeof weatherData?.main && 'undefined' ? (
        <div>
          <p className="welcome">Welcome to weather app! Enter in a city to get the weather</p>
        </div>
      ) : (
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.temp)}˚F</p>
          <p>{weatherData.weather[0].main}</p>

        </div>
      )}

      
    </div>
  );
}

export default App;
