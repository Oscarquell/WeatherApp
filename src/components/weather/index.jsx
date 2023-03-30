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
          <p className='city'>{state.city}, {state.country}
            <>
              <img src={state.conditionIcon} alt=""/>
            </>
          </p>
          <p className='city'>Облачность:  {state.conditionText}</p>
          <p className='city'>Температура воздуха:  {state.temp_c} °C</p>
          <p className='city'>Местное время: {state.localtime}</p>
        </div>
      }
      <p className="error-text">{state.error}</p>

    </div>
  );
};

export default WeatherInfo;