import React from 'react';
import "./style.css"

const WeatherInfo = (props) => {

  const {
    city,
    country,
    temp_c,
    localtime,
    error_catch
  } = props

  return (
    <div className="weather-block">
      {city &&
        <div>
          <p>Название локации: {city}, {country}</p>
          <p>Текущая температура: {temp_c} °C</p>
          <p>Местное время: {localtime}</p>
          <p><img src={error_catch} alt=""/> </p>
        </div>
      }
    </div>
  );
};

export default WeatherInfo;