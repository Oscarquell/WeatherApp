import React from 'react';
import "./style.css"

const WeatherInfo = (props) => {

  const {
    city,
    country,
    temp_c,
    localtime,
    error
  } = props

  console.log(error)

  return (
    <div className="weather-block">
      {city &&
        <div>
          <p>Название локации: {city}, {country}</p>
          <p>Текущая температура: {temp_c} °C</p>
          <p>Местное время: {localtime}</p>
        </div>
      }
      <p>{error}</p>
    </div>
  );
};

export default WeatherInfo;