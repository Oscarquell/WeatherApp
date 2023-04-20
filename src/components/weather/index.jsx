import React from 'react';
import "./style.css"

const WeatherInfo = (props) => {

  const {
    state
  } = props

  return (
    <div className="weather-block">
      {state.city &&
        <div>
          <div> <img src={state.conditionIcon} alt=""/></div>
          <p className='city'>{state.city}, {state.country}</p>
          <p className='temp_c'>{state.temp_c} °C</p>
          <p className='conditionText'>Cloudiness:  {state.conditionText}</p>
        </div>
      }
      <p className="error-text">{state.error}</p>

    </div>
  );
};

export default WeatherInfo;
