import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">Kashima</p>
        <p className="weather-description">Cloudy</p>
      </div>
      <img alt="weather" className="weather-icon" src=""/>
    </div>
  )
}

export default CurrentWeather;
