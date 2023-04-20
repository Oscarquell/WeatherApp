import React, { Component } from 'react';
import Form from "./components/form";
import WeatherInfo from "./components/weather";
import CircularIndeterminate from "./components/loader";
import './App.css'

const API_KEY = '22bb777a7c074b4a96f72145221412';

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    temp_c: undefined,
    localtime: undefined,
    conditionText: undefined,
    conditionIcon: undefined,
    isLoading: false,
    error: undefined
  }

  defaultStateFunction() {
    this.setState({
      city: undefined,
      country: undefined,
      temp_c: undefined,
      localtime: undefined,
      conditionText: undefined,
      conditionIcon: undefined,
    })
  }

  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
        this.setState({isLoading: true})
        fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.status);
            }
            return response.json();
          })
          .then(data => {
            this.setState({
              city: data.location.name,
              country: data.location.country,
              temp_c: data.current.temp_c,
              localtime: data.location.localtime,
              conditionText: data.current.condition.text,
              conditionIcon: data.current.condition.icon,
              error: undefined,
            });
          })
          .catch(error => {
            if (error.message === '400') {
              this.defaultStateFunction()
              this.setState({
                error: 'In the request there is a syntax error.',
              })
            } else {
              this.defaultStateFunction()
              this.setState({
                error: "Сервер недоступен" } )
            }})
          .finally(() => {
            this.setState({isLoading: false})
          })
    }
    else {
      this.defaultStateFunction()
      this.setState({
        error: 'Enter location name'
      });
    }
  }

  handleClick = () => {
    this.defaultStateFunction()
    this.setState({
      error: undefined
    }) }

  render() {
    return (
      <div>
        {this.state.isLoading ? <CircularIndeterminate /> : <></>}
        <div
            className="container"
            style={{
              height: this.state.city || this.state.error ? '505px' : '105px',
            }}
        >
          <Form
              getWeather={this.getWeather}
              handleClick={this.handleClick}
          />
          {
            this.state.error ?
                <i className='error-image'></i> : undefined
          }
          <WeatherInfo
              state={this.state}
          />
        </div>
      </div>
    );
  }
}

export default App;

// {this.state.isLoading ? <CircularIndeterminate /> : <></>}

