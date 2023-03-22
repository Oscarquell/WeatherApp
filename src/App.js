import React, {useEffect, useState} from 'react'
import Header from "./components/header";
import Form from "./components/form";
import WeatherInfo from "./components/weather";
import './App.css';


function App() {

  const [weatherData, setWeatherData] = useState(null);

  const CITY = (event) => {
    event.preventDefault();
    return event.target.city.value
  }

  const API_KEY = "22bb777a7c074b4a96f72145221412";
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=no`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, []);

  if (!weatherData) return <div>Loading...</div>;


  return (
    <div>
      <Header />
      <Form CITY={CITY}/>
      <WeatherInfo />
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
//
// const WeatherForecast = () => {
//
//   const [weatherData, setWeatherData] = useState(null);
//
//   const API_KEY = "22bb777a7c074b4a96f72145221412";
//   const city = 'Bishkek';
//   const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
//
//   useEffect(() => {
//     fetch(API_URL)
//       .then((response) => response.json())
//       .then((data) => setWeatherData(data));
//   }, []);
//
//   if (!weatherData) return <div>Loading...</div>;
//
//   return (
//     <div>
//       <h2>{weatherData.location.name}</h2>
//       <h2>{weatherData.location.country}</h2>
//       <h2>{weatherData.current.temp_c} C</h2>
//     </div>
//   );
// };
// export default WeatherForecast;