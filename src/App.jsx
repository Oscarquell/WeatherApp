import React, { Component } from 'react';
import Header from "./components/header";
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
    error: undefined,
    errorCatch: undefined,
    isLoading: false,
    inputValue: ""
  }


  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      this.setState({isLoading: true})
      try {
       const API_URL = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`);
       const data = await API_URL.json();
       this.setState({
         city: data.location.name,
         country: data.location.country,
         temp_c: data.current.temp_c,
         localtime: data.location.localtime,
         conditionText: data.current.condition.text,
         conditionIcon: data.current.condition.icon,
         errorCatch: undefined,
         error: undefined,
         inputValue: city
       });
       }
      catch (e) {
        this.setState({errorCatch: "Сервер недоступен, либо неверно введено название города."})
      }
      finally {
       this.setState({isLoading: false})
      };
    } else {
      this.setState({
        error: 'Введите название города!'
      });
    }
  }

  handleClick = () => {
    this.setState({
      city: undefined,
      country: undefined,
      temp_c: undefined,
      localtime: undefined,
      conditionText: undefined,
      conditionIcon: undefined,
      error: undefined,
      errorCatch: undefined,
      inputValue: ""
    })
  }

  render() {
    return (
      <div className="container">
        <Header />

        <Form
          getWeather={this.getWeather}
          handleClick={this.handleClick}
        />

        {this.state.isLoading  ? <CircularIndeterminate /> :
          <WeatherInfo
            city={this.state.city}
            country={this.state.country}
            temp_c={this.state.temp_c}
            localtime={this.state.localtime}
            error={this.state.error}
            conditionText={this.state.conditionText}
            conditionIcon={this.state.conditionIcon}
            errorCatch={this.state.errorCatch}
          />
        }
      </div>
    );
  }
}

export default App;
