import React from 'react';
import "./style.css"

const WeatherInfo = (props) => {

  const {
    city,
    country,
    temp_c,
    localtime,
    error,
    conditionText,
    conditionIcon,
    errorCatch,
    nameError
  } = props

  return (
    <div className="weather-block">
      {city &&
        <div>
          <p className='city'>{city}, {country}
            <>
              <img src={conditionIcon} alt=""/>
            </>
          </p>
          <p className='city'>Облачность:  {conditionText}</p>
          <p className='city'>Температура воздуха:  {temp_c} °C</p>
          <p className='city'>Местное время: {localtime}</p>
        </div>
      }
      <p className="error-text">{error}{errorCatch}{nameError}</p>

    </div>
  );
};

export default WeatherInfo;