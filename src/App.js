import './App.css';
import Search from "./components/search/search";
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL } from './api';

function App() {

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split("");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    console.log(currentWeatherFetch);
  }
  return (

<div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
